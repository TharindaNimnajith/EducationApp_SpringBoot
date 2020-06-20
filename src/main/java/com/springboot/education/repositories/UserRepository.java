package com.springboot.education.repositories;

import com.springboot.education.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    //
}
