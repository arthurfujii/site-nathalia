# Running the Modernized Landing Page locally

1. Ensure Node.js 20+ is installed.
2. Run `npm install` in the repository root.
3. Configure environment variables in `.env` for Nodemailer SMTP credentials:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `CONTACT_RECEIVER_EMAIL`
4. Execute `npm run dev`.
5. Browse to `localhost:3000`.
