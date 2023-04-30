DROP DATABASE IF EXISTS songs_dev;

CREATE DATABASE songs_dev;

\connect songs_dev;

CREATE TABLE songs_table (
    name VARCHAR(255) NOT NULL,
    artist VARCHAR(255) NOT NULL,
    album VARCHAR(255),
    time VARCHAR(100),
    is_favorite BOOLEAN
)