"use strict";

const ENV = process.env;

exports.postgresql = {
	user: ENV["USER"],
	password: ENV["PASSWORD"],
	host: ENV["HOST"],
	database: ENV["DATABASE"]
};
