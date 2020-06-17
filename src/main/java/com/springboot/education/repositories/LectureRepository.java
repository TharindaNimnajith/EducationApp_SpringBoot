package com.springboot.education.repositories;

import com.springboot.education.models.Lecture;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LectureRepository extends JpaRepository<Lecture, String> {
    //
}
