const pgp = require('pg-promise')();
const settings = require('./settings');
const { connectionString, user, password, host, database } = settings.postgresql;

// Hosted Postgres providers (Neon, Supabase, Vercel Postgres, etc.) require SSL.
const ssl = { rejectUnauthorized: false };

const db = pgp(connectionString
    ? { connectionString, ssl }
    : { user, password, host, port: 5432, database, ssl });

// Create the users table on first use, so a fresh database works without running user.sql.
let schemaReady;
db.ensureSchema = () => {
    if (!schemaReady) {
        schemaReady = db.none(`CREATE TABLE IF NOT EXISTS users (
            user_id SERIAL PRIMARY KEY,
            username VARCHAR(50) NOT NULL UNIQUE,
            password_hash VARCHAR(255) NOT NULL
        )`).catch((err) => {
            schemaReady = undefined; // retry on the next request
            throw err;
        });
    }
    return schemaReady;
};

module.exports = db
