package com.springboot.education.services;

import com.springboot.education.models.User;
import com.springboot.education.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void addUser(User user) {
        userRepository.save(user);
    }

    public void deleteUser(String userId) {
        userRepository.deleteById(userId);
    }

    public User getUser(String userId) {
        return userRepository.findById(userId).get();
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
