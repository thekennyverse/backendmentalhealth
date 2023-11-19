
-- delete table
-- DROP TABLE users;

-- create table
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  UNIQUE (username)
);

-- insert into table
INSERT INTO users ( username, password_hash) VALUES
(
  'cloud7', 
  'abc'
);

-- select everything
SELECT * FROM users;