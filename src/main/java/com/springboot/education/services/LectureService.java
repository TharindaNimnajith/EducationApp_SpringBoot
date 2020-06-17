package com.springboot.education.services;

import com.springboot.education.models.Lecture;
import com.springboot.education.repositories.LectureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LectureService {
    @Autowired
    private LectureRepository lectureRepository;

    public void addLecture(Lecture lecture) {
        lectureRepository.save(lecture);
    }

    public void deleteLecture(String lectureId) {
        lectureRepository.deleteById(lectureId);
    }

    public Lecture getLecture(String lectureId) {
        return lectureRepository.findById(lectureId).get();
    }

    public List<Lecture> getAllLectures() {
        return lectureRepository.findAll();
    }
}
