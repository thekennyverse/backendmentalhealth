"use strict";

const ENV = process.env;

exports.postgresql = {
	// Preferred: a single connection string from your Postgres provider.
	connectionString: ENV["DATABASE_URL"],
	// Fallback: individual settings.
	user: ENV["DB_USER"] || ENV["USER"],
	password: ENV["PASSWORD"],
	host: ENV["HOST"],
	database: ENV["DATABASE"]
};
