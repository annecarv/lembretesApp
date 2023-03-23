CREATE DATABASE IF NOT EXISTS lembretes;
USE lembretes;

CREATE TABLE notes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    note VARCHAR(45) NOT NULL,
    status VARCHAR(45) NOT NULL,
    deadline DATETIME NOT NULL,
    created_at VARCHAR(45) NOT NULL,
    updated_at VARCHAR(45) NOT NULL
);
