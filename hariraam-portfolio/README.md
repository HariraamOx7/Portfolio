# Hariraam's portfolio

React portfolio with a downloadable placement resume and a Gmail contact backend.

## Gmail setup

1. Enable 2-Step Verification on `hariraam341@gmail.com`.
2. Create an App Password at https://myaccount.google.com/apppasswords (label it "Portfolio").
3. Edit `server/.env` locally and set `GMAIL_APP_PASSWORD` to that 16-character password. Do not use your regular Gmail password or place credentials in any `REACT_APP_` variable. This file is ignored by Git.
4. In the `server` folder run `npm run verify-email` to check SMTP login without sending mail.

Google instructions: https://support.google.com/accounts/answer/185833
Nodemailer Gmail guide: https://nodemailer.com/guides/using-gmail

## Run locally

Backend terminal (keep open):

```powershell
cd D:\PLACEMENT_PREP\PORTFOLIO\hariraam-portfolio\server
npm install
npm start
```

Frontend terminal (keep open):

```powershell
cd D:\PLACEMENT_PREP\PORTFOLIO\hariraam-portfolio
npm install
npm start
```

Open http://localhost:3000. The frontend proxies `/api` to port 3001.
Messages go only to `hariraam341@gmail.com`; Reply replies to the visitor's address.
Success means Gmail accepted the message, not proof of inbox delivery. Missing credentials or SMTP failures display an error and preserve the message.

## Production

### Vercel (frontend and Gmail backend together)

Use the free Hobby plan for this personal portfolio. Set Root Directory to `hariraam-portfolio`, framework to Create React App, build command to `npm run build`, and output directory to `build`.

The `api/contact.mjs` and `api/health.mjs` entries run the shared backend as Vercel Functions. No separate backend URL is needed. Leave `REACT_APP_API_URL` unset.

In Vercel project Settings > Environment Variables, add:

- `GMAIL_USER`: `hariraam341@gmail.com`
- `GMAIL_APP_PASSWORD`: the Gmail App Password, entered privately in Vercel
- `ALLOWED_ORIGINS`: your exact production origin, such as `https://your-portfolio.vercel.app`, plus any custom domain, separated by commas

Apply the Gmail variables to Production and Preview if you need contact messages in previews. The current Vercel deployment origin is also allowed automatically. Redeploy after changing environment variables. Never commit `server/.env` or include Gmail credentials in frontend variables.

After deployment, check `/api/health` for `emailConfigured: true` and submit a contact message. A local SMTP check does not prove production delivery: verify the deployed form and inbox too. The in-memory rate limit is per function instance; Vercel Firewall or a shared rate-limit store is needed for a global limit across instances.

Render's free tier blocks outgoing SMTP ports 25, 465, and 587, so this Gmail SMTP implementation is not compatible with a free Render backend.

### Standalone Node hosting

Run `npm run build` in the frontend folder, then run `npm start` in `server`. The backend serves both the built website and `/api/contact` on port 3001 (or `PORT`). Use a Node host with HTTPS and outbound Gmail SMTP access. Set `ALLOWED_ORIGINS` to your exact public website origin. If behind a trusted reverse proxy, set `TRUST_PROXY_HOPS` to its actual hop count.

To preview the production build locally, open http://localhost:3001 after starting the backend.

For separate frontend/backend hosting, set the frontend's `REACT_APP_API_URL` to the HTTPS backend origin before building, and include the frontend origin in backend `ALLOWED_ORIGINS`.

The contact API validates input, fixes the recipient, limits each IP to five requests per 15 minutes, and includes a honeypot. For multiple backend instances, use a shared rate-limit store.

## Checks

Run `npm test` inside `server` and `npm run build` inside the frontend folder. Tests use a fake mail transport, so they send no email. Live Gmail login and delivery require your App Password and a real form submission.
