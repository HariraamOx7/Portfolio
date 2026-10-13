import dotenv from 'dotenv';
import { createApp } from './app.mjs';
import { createMailer } from './mail.mjs';

dotenv.config({ path: new URL('.env', import.meta.url), quiet: true });
const mailer = createMailer(process.env);
const port = Number(process.env.PORT || 3001);
createApp({ mailer }).listen(port, () => {
  console.log(`Portfolio server: http://localhost:${port}`);
  console.log(mailer ? 'Gmail credentials configured; use npm run verify-email to verify login.' : 'Gmail not configured. Add GMAIL_APP_PASSWORD to server/.env.');
});
