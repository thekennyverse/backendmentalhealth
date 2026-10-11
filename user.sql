
-- delete table
-- DROP TABLE users;

-- create table
CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  UNIQUE (username)
);

-- Passwords are stored as bcrypt hashes. Create users through POST /register
-- rather than inserting rows by hand.

-- select everything
SELECT user_id, username FROM users;
