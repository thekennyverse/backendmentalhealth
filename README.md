# Fulton Mind Matters – Backend

Express API for login and registration, deployed on Vercel as a serverless function.

## Endpoints
- `GET /` – health check
- `POST /register` – `{ username, password }` → `{ authenticated }`
- `POST /login` – `{ username, password }` → `{ authenticated }`

## Setup
1. In Vercel, open this project → Storage → Create Database → Neon, and connect it to this project. That sets `DATABASE_URL` automatically (or set `DATABASE_URL` yourself, in Project → Settings → Environment Variables or a local `.env` file).
2. Redeploy. The `users` table is created automatically on first use (`user.sql` has the same schema if you prefer to create it by hand).
3. Run locally with `npm install && npm start` (listens on port 4000, or `PORT`).

Passwords are stored as bcrypt hashes, so create accounts through `/register` rather than inserting rows by hand.
