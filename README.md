# Fulton Mind Matters – Backend

Express API for login and registration, deployed on Vercel as a serverless function.

## Endpoints
- `GET /` – health check
- `POST /register` – `{ username, password }` → `{ authenticated }`
- `POST /login` – `{ username, password }` → `{ authenticated }`

## Setup
1. Create a Postgres database (e.g. Neon, Supabase or Vercel Postgres) and run `user.sql` against it.
2. Set `DATABASE_URL` to the database's connection string (in Vercel: Project → Settings → Environment Variables, or in a local `.env` file).
3. Run locally with `npm install && npm start` (listens on port 4000, or `PORT`).

Passwords are stored as bcrypt hashes, so create accounts through `/register` rather than inserting rows by hand.
