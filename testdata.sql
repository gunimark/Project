CREATE TABLE users(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  password VARCHAR(255)
);

INSERT INTO users (name, password) VALUES
('Mark', '1512');
