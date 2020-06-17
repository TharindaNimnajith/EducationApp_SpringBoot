package com.springboot.education;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

//    @GetMapping("/users")
//    public void addUser(User user) {
//        userService.addUser(user);
//    }

//    @GetMapping("/users/{userId}")
//    public void deleteUser(@PathVariable String userId) {
//        userService.deleteUser(userId);
//    }

    @GetMapping("/users/{userId}")
    public User getUser(@PathVariable String userId) {
        return userService.getUser(userId);
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}
