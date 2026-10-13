import { createApp } from './app.js';
import { createMailer } from './mail.js';

// Credentials come from Vercel project settings, never from shipped .env files.
export default createApp({ mailer: createMailer(process.env) });
