package com.springboot.education.services;

import com.springboot.education.models.Lecture;
import com.springboot.education.repositories.LectureRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LectureService {
    private final LectureRepository lectureRepository;

    public LectureService(LectureRepository lectureRepository) {
        this.lectureRepository = lectureRepository;
    }

    public void addLecture(Lecture lecture) {
        lectureRepository.save(lecture);
    }

    public void deleteLecture(int lectureId) {
        lectureRepository.deleteById(lectureId);
    }

    public Lecture getLecture(int lectureId) {
        if (lectureRepository.findById(lectureId).isPresent())
            return lectureRepository.findById(lectureId).get();
        return null;
    }

    public List<Lecture> getAllLectures() {
        return lectureRepository.findAll();
    }
}
