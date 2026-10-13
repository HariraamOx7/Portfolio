import express from 'express';
import { rateLimit } from 'express-rate-limit';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

export function createApp({ mailer, env = process.env, limit = 5 }) {
  const app = express();
  app.disable('x-powered-by');
  const proxyHops = Number(env.TRUST_PROXY_HOPS || (env.VERCEL ? 1 : 0));
  if (Number.isInteger(proxyHops) && proxyHops > 0) app.set('trust proxy', proxyHops);
  const origins = new Set((env.ALLOWED_ORIGINS || 'http://localhost:3000,http://127.0.0.1:3000,http://localhost:3001,http://127.0.0.1:3001').split(',').map(s => s.trim()).filter(Boolean));
  if (env.VERCEL) {
    for (const host of [env.VERCEL_URL, env.VERCEL_PROJECT_PRODUCTION_URL]) {
      if (host) origins.add(`https://${host}`);
    }
  }
  app.use('/api', (req, res, next) => {
    const origin = req.get('origin');
    if (origin && !origins.has(origin)) return res.status(403).json({ error: 'This website is not allowed to submit messages.' });
    if (origin) {
      res.set('Access-Control-Allow-Origin', origin);
      res.vary('Origin');
    }
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Cache-Control', 'no-store');
    if (req.method === 'OPTIONS') return res.sendStatus(204);
    next();
  });
  app.use(express.json({ limit: '16kb' }));
  app.get('/api/health', (req, res) => res.json({ ok: true, emailConfigured: Boolean(mailer) }));
  app.post('/api/contact', rateLimit({
    windowMs: 15 * 60 * 1000, limit, standardHeaders: 'draft-8', legacyHeaders: false,
    message: { error: 'Too many messages. Please try again in 15 minutes.' },
  }), async (req, res) => {
    const { name, email, message, website } = req.body || {};
    if (website) return res.status(400).json({ error: 'Unable to submit this message.' });
    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      return res.status(400).json({ error: 'Please enter your name, email, and message.' });
    }
    const fields = { name: name.trim(), email: email.trim(), message: message.trim() };
    if (!fields.name || fields.name.length > 100 || /[\r\n]/.test(fields.name) ||
        fields.email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(fields.email) ||
        !fields.message || fields.message.length > 5000) {
      return res.status(400).json({ error: 'Enter a valid email, a name under 100 characters, and a message under 5,000 characters.' });
    }
    if (!mailer) return res.status(503).json({ error: 'The contact form is temporarily unavailable. Please email hariraam341@gmail.com directly.' });
    try {
      const result = await mailer.sendMail({
        from: { name: 'Hariraam Portfolio', address: env.GMAIL_USER },
        to: 'hariraam341@gmail.com',
        replyTo: fields.email,
        subject: 'New portfolio message',
        text: `Name: ${fields.name}\nEmail: ${fields.email}\n\n${fields.message}`,
      });
      if (!result.accepted?.some(address => address.toLowerCase() === 'hariraam341@gmail.com')) throw new Error('Recipient not accepted');
      return res.json({ ok: true });
    } catch (error) {
      console.error('Contact email failed:', error.code || 'MAIL_FAILED');
      return res.status(502).json({ error: 'Your message could not be sent. Please try again or email hariraam341@gmail.com directly.' });
    }
  });
  app.use('/api', (req, res) => res.status(404).json({ error: 'Not found.' }));
  const build = fileURLToPath(new URL('../build/', import.meta.url));
  if (fs.existsSync(path.join(build, 'index.html'))) {
    app.use(express.static(build));
    app.get('/{*path}', (req, res) => res.sendFile(path.join(build, 'index.html')));
  }
  app.use((error, req, res, next) => {
    res.status(error.type === 'entity.too.large' ? 413 : 400).json({ error: 'Invalid message request.' });
  });
  return app;
}
