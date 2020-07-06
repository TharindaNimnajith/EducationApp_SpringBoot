package com.springboot.education.services;

import com.springboot.education.models.User;
import com.springboot.education.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final JavaMailSender javaMailSender;

    @Autowired
    public UserService(JavaMailSender javaMailSender, UserRepository userRepository) {
        this.javaMailSender = javaMailSender;
        this.userRepository = userRepository;
    }

    public void addUser(User user) {
        userRepository.save(user);
    }

    public void deleteUser(int userId) {
        userRepository.deleteById(userId);
    }

    public User getUser(int userId) {
        if (userRepository.findById(userId).isPresent())
            return userRepository.findById(userId).get();
        return null;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public void sendMail(User user) throws MailException {
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setTo(user.getEmail());
        simpleMailMessage.setFrom("spring.mail.username");
        simpleMailMessage.setSubject("User Added");
        simpleMailMessage.setText("You are added as a user.");
        javaMailSender.send(simpleMailMessage);
    }
}
