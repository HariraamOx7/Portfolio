import dotenv from 'dotenv';
import { createMailer } from './mail.js';
dotenv.config({ path: new URL('.env', import.meta.url), quiet: true });
const mailer = createMailer(process.env);
if (!mailer) {
  console.error('Add GMAIL_USER and a 16-character Gmail App Password to server/.env.');
  process.exitCode = 1;
} else {
  try {
    await mailer.verify();
    console.log('Gmail SMTP login verified. No email sent.');
  } catch (error) {
    console.error('Gmail SMTP login failed:', error.code || 'SMTP_ERROR');
    process.exitCode = 1;
  } finally {
    mailer.close();
  }
}
