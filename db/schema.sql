--create burger_db database--
CREATE DATABASE burgers_db;

--switch into burger db database--
USE burgers_db;

--create a burgers table with the following fields: id, burger_name, devoured--
CREATE TABLE burgers (
	id INTEGER (255) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);