### Run this script once local db is setup

CREATE TABLE PUBLIC_HOLIDAY (
    id int NOT NULL AUTO_INCREMENT,
    ph_name varchar(255) NOT NULL,
    ph_date DATE NOT NULL,
    PRIMARY KEY (id) 
);

# Public Holiday
INSERT INTO PUBLIC_HOLIDAY (ph_name, ph_date)
VALUES ('Christmas', '2023-12-25');