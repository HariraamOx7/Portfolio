import nodemailer from 'nodemailer';

export function createMailer(env) {
  const user = env.GMAIL_USER?.trim();
  const pass = env.GMAIL_APP_PASSWORD?.replace(/\s/g, '');
  if (!user || !pass || !/^[a-zA-Z0-9]{16}$/.test(pass)) return null;
  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
    dnsTimeout: 10000,
  });
}
