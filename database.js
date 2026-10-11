const pgp = require('pg-promise')();
const settings = require('./settings');
const { connectionString, user, password, host, database } = settings.postgresql;

// Hosted Postgres providers (Neon, Supabase, Vercel Postgres, etc.) require SSL.
const ssl = { rejectUnauthorized: false };

const db = pgp(connectionString
    ? { connectionString, ssl }
    : { user, password, host, port: 5432, database, ssl });

module.exports = db
