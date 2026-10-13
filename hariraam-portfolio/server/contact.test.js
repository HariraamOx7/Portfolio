import test from 'node:test';
import assert from 'node:assert/strict';
import { createApp } from './app.mjs';

const valid = { name: 'Portfolio visitor', email: 'visitor@example.com', message: 'I would like to discuss a software development opportunity.' };
const env = { GMAIL_USER: 'hariraam341@gmail.com', ALLOWED_ORIGINS: 'http://localhost:3000' };

async function withServer(mailer, run, limit = 50, configuration = env) {
  const server = createApp({ mailer, env: configuration, limit }).listen(0, '127.0.0.1');
  await new Promise(resolve => server.once('listening', resolve));
  const url = `http://127.0.0.1:${server.address().port}/api/contact`;
  const post = (body, origin = 'http://localhost:3000') => fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', Origin: origin }, body: JSON.stringify(body) });
  try { await run(post); }
  finally { await new Promise(resolve => server.close(resolve)); }
}

test('accepted mail uses fixed recipient and visitor reply address', async () => {
  let sent;
  await withServer({ sendMail: async mail => { sent = mail; return { accepted: ['hariraam341@gmail.com'] }; } }, async post => {
    const result = await post({ ...valid, to: 'attacker@example.com' });
    assert.equal(result.status, 200);
    assert.equal((await result.json()).ok, true);
    assert.equal(sent.to, 'hariraam341@gmail.com');
    assert.equal(sent.from.address, env.GMAIL_USER);
    assert.equal(sent.replyTo, valid.email);
    assert.ok(sent.text.includes(valid.message));
  });
});

test('invalid input, honeypot and foreign origins cannot send mail', async () => {
  let count = 0;
  await withServer({ sendMail: async () => { count++; } }, async post => {
    for (const body of [{}, { ...valid, email: 'not-an-email' }, { ...valid, name: 'bad\r\nheader' }, { ...valid, message: ' ' }, { ...valid, message: 'x'.repeat(5001) }, { ...valid, website: 'spam' }]) {
      assert.equal((await post(body)).status, 400);
    }
    assert.equal((await post(valid, 'https://untrusted.example')).status, 403);
    assert.equal(count, 0);
  });
});

test('missing credentials return unavailable instead of success', async () => {
  await withServer(null, async post => assert.equal((await post(valid)).status, 503));
});

test('SMTP failure and rejected recipient never claim success', async () => {
  for (const mailer of [{ sendMail: async () => { throw Object.assign(new Error('secret'), { code: 'EAUTH' }); } }, { sendMail: async () => ({ accepted: [] }) }]) {
    await withServer(mailer, async post => {
      const response = await post(valid);
      assert.equal(response.status, 502);
      assert.equal((await response.json()).ok, undefined);
    });
  }
});

test('excessive messages are rate limited', async () => {
  await withServer({ sendMail: async () => ({ accepted: ['hariraam341@gmail.com'] }) }, async post => {
    assert.equal((await post(valid)).status, 200);
    assert.equal((await post(valid)).status, 429);
  }, 1);
});

test('Vercel production and current preview origins are allowed', async () => {
  await withServer({ sendMail: async () => ({ accepted: ['hariraam341@gmail.com'] }) }, async post => {
    assert.equal((await post(valid, 'https://portfolio.vercel.app')).status, 200);
    assert.equal((await post(valid, 'https://portfolio-preview.vercel.app')).status, 200);
    assert.equal((await post(valid, 'https://other-project.vercel.app')).status, 403);
  }, 50, { ...env, VERCEL: '1', VERCEL_PROJECT_PRODUCTION_URL: 'portfolio.vercel.app', VERCEL_URL: 'portfolio-preview.vercel.app' });
});

test('Vercel function entries expose the same backend app', async () => {
  const { default: contact } = await import('../api/contact.mjs');
  const { default: health } = await import('../api/health.mjs');
  assert.equal(typeof contact, 'function');
  assert.equal(contact, health);
  const server = contact.listen(0, '127.0.0.1');
  await new Promise(resolve => server.once('listening', resolve));
  try {
    const response = await fetch(`http://127.0.0.1:${server.address().port}/api/health`);
    assert.equal(response.status, 200);
    assert.equal((await response.json()).ok, true);
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});
