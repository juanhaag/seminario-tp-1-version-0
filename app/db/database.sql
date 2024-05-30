CREATE DATABASE IF NOT EXISTS seminario; 
USE seminario;

CREATE TABLE users( 
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE groups(
  id INT AUTO_INCREMENT PRIMARY KEY, 
  name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE actions(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE users_groups(
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  group_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (group_id) REFERENCES groups(id)
);

CREATE TABLE groups_actions(
  id INT AUTO_INCREMENT PRIMARY KEY, 
  group_id INT NOT NULL,
  action_id INT NOT NULL,
  FOREIGN KEY (group_id) REFERENCES groups(id),
  FOREIGN KEY (action_id) REFERENCES actions(id)
);

INSERT INTO users (name, email, password) VALUES 
  ('John Doe', 'john.doe@example.com', 'password123'),
  ('Jane Smith', 'jane.smith@example.com', 'password456'),
  ('Mike Johnson', 'mike.johnson@example.com', 'password789');

INSERT INTO groups (name) VALUES 
  ('Admin'),
  ('Editor'),
  ('Viewer');

INSERT INTO actions (name) VALUES 
  ('Create'),
  ('Read'),
  ('Update'),
  ('Delete');

INSERT INTO users_groups (user_id, group_id) VALUES 
  (1, 1),
  (2, 2),
  (3, 3);

INSERT INTO groups_actions (group_id, action_id) VALUES 
  (1, 1),
  (2, 2),
  (3, 3),
  (1, 4),
  (2, 4),
  (3, 2);