package com.springboot.education;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Lecture {
    private int id;
    private String lesson;
    private String subject;
    private String lecturer;
    private String location;
    private Date date;

    public Lecture() {
        id = 0;
        lesson = "";
        subject = "";
        lecturer = "";
        location = "";
        date = new Date();
    }

    public Lecture(int id, String lesson, String subject, String lecturer, String location, Date date) {
        this.id = id;
        this.lesson = lesson;
        this.subject = subject;
        this.lecturer = lecturer;
        this.location = location;
        this.date = date;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLesson() {
        return lesson;
    }

    public void setLesson(String lesson) {
        this.lesson = lesson;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getLecturer() {
        return lecturer;
    }

    public void setLecturer(String lecturer) {
        this.lecturer = lecturer;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
