DROP DATABASE IF EXISTS burger_database;

CREATE DATABASE burger_database;

USE burger_database

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100),
    eaten BOOLEAN,
    PRIMARY KEY(id)
);