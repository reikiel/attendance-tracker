### Run this script once local db is setup

CREATE TABLE PUBLIC_HOLIDAY (
    id int NOT NULL AUTO_INCREMENT,
    ph_name varchar(255) NOT NULL,
    ph_date DATE NOT NULL,
    PRIMARY KEY (id) 
);

CREATE TABLE WFH (
    id int NOT NULL AUTO_INCREMENT,
    wfh_day varchar(255) NOT NULL,
    wfh_date DATE NOT NULL,
    PRIMARY KEY (id) 
);

CREATE TABLE LEAVES (
    id int NOT NULL AUTO_INCREMENT,
    leave_name varchar(255) NOT NULL,
    leave_date DATE NOT NULL,
    PRIMARY KEY (id) 
);

# Public Holiday that falls on work day
INSERT INTO PUBLIC_HOLIDAY (ph_name, ph_date) VALUES ('New Years Day -- in lieu', '2023-01-02');
INSERT INTO PUBLIC_HOLIDAY (ph_name, ph_date) VALUES ('Chinese New Year', '2023-01-23');
INSERT INTO PUBLIC_HOLIDAY (ph_name, ph_date) VALUES ('Chinese New Year', '2023-01-24');
INSERT INTO PUBLIC_HOLIDAY (ph_name, ph_date) VALUES ('Good Friday', '2023-04-07');
INSERT INTO PUBLIC_HOLIDAY (ph_name, ph_date) VALUES ('Labour Day', '2023-05-01');
INSERT INTO PUBLIC_HOLIDAY (ph_name, ph_date) VALUES ('Vesak Day', '2023-06-02');
INSERT INTO PUBLIC_HOLIDAY (ph_name, ph_date) VALUES ('Hari Raya Haji', '2023-06-29');
INSERT INTO PUBLIC_HOLIDAY (ph_name, ph_date) VALUES ('National Day', '2023-08-09');
INSERT INTO PUBLIC_HOLIDAY (ph_name, ph_date) VALUES ('Election Day', '2023-09-01');
INSERT INTO PUBLIC_HOLIDAY (ph_name, ph_date) VALUES ('Deepavali -- in lieu', '2023-11-13');
INSERT INTO PUBLIC_HOLIDAY (ph_name, ph_date) VALUES ('Christmas', '2023-12-25');

# WFH days
INSERT INTO WFH (wfh_day, wfh_date) VALUES ('Tue', '2023-06-06');
INSERT INTO WFH (wfh_day, wfh_date) VALUES ('Wed', '2023-06-07');
INSERT INTO WFH (wfh_day, wfh_date) VALUES ('Wed', '2023-06-14');
INSERT INTO WFH (wfh_day, wfh_date) VALUES ('Thu', '2023-06-15');
INSERT INTO WFH (wfh_day, wfh_date) VALUES ('Wed', '2023-06-21');
INSERT INTO WFH (wfh_day, wfh_date) VALUES ('Wed', '2023-06-28');
INSERT INTO WFH (wfh_day, wfh_date) VALUES ('Fri', '2023-06-30');
INSERT INTO WFH (wfh_day, wfh_date) VALUES ('Wed', '2023-07-05');
INSERT INTO WFH (wfh_day, wfh_date) VALUES ('Wed', '2023-07-12');
INSERT INTO WFH (wfh_day, wfh_date) VALUES ('Wed', '2023-07-19');
INSERT INTO WFH (wfh_day, wfh_date) VALUES ('Fri', '2023-07-21');
INSERT INTO WFH (wfh_day, wfh_date) VALUES ('Tue', '2023-07-25');
INSERT INTO WFH (wfh_day, wfh_date) VALUES ('Fri', '2023-07-28');
INSERT INTO WFH (wfh_day, wfh_date) VALUES ('Thu', '2023-08-03');
INSERT INTO WFH (wfh_day, wfh_date) VALUES ('Fri', '2023-08-04');
INSERT INTO WFH (wfh_day, wfh_date) VALUES ('Fri', '2023-08-11');
INSERT INTO WFH (wfh_day, wfh_date) VALUES ('Wed', '2023-08-16');
INSERT INTO WFH (wfh_day, wfh_date) VALUES ('Wed', '2023-08-30');

# Leaves
INSERT INTO LEAVES (leave_name, leave_date) VALUES ('MC', '2023-07-13');
INSERT INTO LEAVES (leave_name, leave_date) VALUES ('MC', '2023-07-14');
INSERT INTO LEAVES (leave_name, leave_date) VALUES ('Vacation Leave', '2023-08-17');
INSERT INTO LEAVES (leave_name, leave_date) VALUES ('Vacation Leave', '2023-08-18');
INSERT INTO LEAVES (leave_name, leave_date) VALUES ('Vacation Leave', '2023-08-19');
INSERT INTO LEAVES (leave_name, leave_date) VALUES ('Vacation Leave', '2023-08-20');
INSERT INTO LEAVES (leave_name, leave_date) VALUES ('Vacation Leave', '2023-08-21');
INSERT INTO LEAVES (leave_name, leave_date) VALUES ('MC', '2023-08-22');
INSERT INTO LEAVES (leave_name, leave_date) VALUES ('Medical Leave', '2023-08-25');