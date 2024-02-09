package com.example.corpsymph.controller;

import com.example.corpsymph.entity.User1Details;
import com.example.corpsymph.service.User1DetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user-details")
public class User1DetailsController {

    @Autowired
    private User1DetailsService user1DetailsService;

    @GetMapping
    public List<User1Details> getAllUserDetails() {
        return user1DetailsService.getAllUserDetails();
    }

    @GetMapping("/{id}")
    public User1Details getUserDetailsById(@PathVariable int id) {
        return user1DetailsService.getUserDetailsById(id);
    }

    @PostMapping
    public User1Details createUserDetails(@RequestBody User1Details user1Details) {
        return user1DetailsService.createUserDetails(user1Details);
    }

    @PutMapping("/{id}")
    public User1Details updateUserDetails(@PathVariable int id, @RequestBody User1Details user1Details) {
        return user1DetailsService.updateUserDetails(id, user1Details);
    }

    @DeleteMapping("/{id}")
    public void deleteUserDetails(@PathVariable int id) {
        user1DetailsService.deleteUserDetails(id);
    }
}
