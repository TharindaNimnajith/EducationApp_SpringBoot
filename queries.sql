CREATE DATABASE education_app_db;

CREATE TABLE user (
    user_id char(10),
    first_name varchar(30),
    last_name varchar(30),
    position varchar(30) NOT NULL DEFAULT 'Student',
    contact_no char(10),
    nic char(10) UNIQUE,
    email varchar(30) NOT NULL UNIQUE,
    password varchar(30) NOT NULL,
    CONSTRAINT user_pk PRIMARY KEY(user_id)
);

CREATE TABLE lecture (
    lecture_id char(10),
    lesson_name varchar(30),
    lesson_description varchar(100),
    subject_code char(4),
    lecturer_id char(10),
    location_code char(3),
    date DATE,
    start_time TIME,
    end_time TIME,
    CONSTRAINT lecture_pk PRIMARY KEY(lecture_id)
);
