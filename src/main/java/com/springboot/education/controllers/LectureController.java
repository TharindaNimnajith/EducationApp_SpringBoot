package com.springboot.education.controllers;

import com.springboot.education.models.Lecture;
import com.springboot.education.services.LectureService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
public class LectureController {
    private final LectureService lectureService;

    public LectureController(LectureService lectureService) {
        this.lectureService = lectureService;
    }

    @PostMapping("/lectures")
    public void addLecture(@RequestBody Lecture lecture) {
        lectureService.addLecture(lecture);
    }

    @PutMapping("/lectures/{lectureId}")
    public ResponseEntity<?> updateLecture(@RequestBody Lecture lecture, @PathVariable int lectureId) {
        try {
            Lecture existingLecture = lectureService.getLecture(lectureId);
            if (existingLecture != null) {
                lectureService.addLecture(lecture);
                return new ResponseEntity<>(HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (NoSuchElementException noSuchElementException) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/lectures/{lectureId}")
    public void deleteLecture(@PathVariable int lectureId) {
        lectureService.deleteLecture(lectureId);
    }

    @GetMapping("/lectures/{lectureId}")
    public Lecture getLecture(@PathVariable int lectureId) {
        return lectureService.getLecture(lectureId);
    }

    @GetMapping("/lectures")
    public List<Lecture> getAllLectures() {
        return lectureService.getAllLectures();
    }
}
