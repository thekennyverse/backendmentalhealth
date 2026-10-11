"use strict";

const ENV = process.env;

exports.postgresql = {
	// Preferred: a single connection string. Vercel's Neon integration sets DATABASE_URL;
	// its Supabase integration sets POSTGRES_URL.
	connectionString: ENV["DATABASE_URL"] || ENV["POSTGRES_URL"],
	// Fallback: individual settings.
	user: ENV["DB_USER"] || ENV["USER"],
	password: ENV["PASSWORD"],
	host: ENV["HOST"],
	database: ENV["DATABASE"]
};
