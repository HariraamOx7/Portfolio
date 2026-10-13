import { createApp } from './app.mjs';
import { createMailer } from './mail.mjs';

// Credentials come from Vercel project settings, never from shipped .env files.
export default createApp({ mailer: createMailer(process.env) });
