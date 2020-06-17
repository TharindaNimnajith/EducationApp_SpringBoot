package com.springboot.education;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LectureController {
    @Autowired
    private LectureService lectureService;

//    @GetMapping("/lectures")
//    public void addLecture(Lecture lecture) {
//        lectureService.addLecture(lecture);
//    }

//    @GetMapping("/lectures/{lectureId}")
//    public void deleteLecture(@PathVariable String lectureId) {
//        lectureService.deleteLecture(lectureId);
//    }

    @GetMapping("/lectures/{lectureId}")
    public Lecture getLecture(@PathVariable String lectureId) {
        return lectureService.getLecture(lectureId);
    }

    @GetMapping("/lectures")
    public List<Lecture> getAllLectures() {
        return lectureService.getAllLectures();
    }
}
