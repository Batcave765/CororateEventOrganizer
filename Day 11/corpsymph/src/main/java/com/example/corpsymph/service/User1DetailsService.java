package com.example.corpsymph.service;

import com.example.corpsymph.entity.User1Details;
import com.example.corpsymph.repository.User1DetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class User1DetailsService {

    @Autowired
    private User1DetailsRepository user1DetailsRepository;

    public List<User1Details> getAllUserDetails() {
        return user1DetailsRepository.findAll();
    }

    public User1Details getUserDetailsById(int id) {
        Optional<User1Details> optionalUserDetails = user1DetailsRepository.findById(id);
        return optionalUserDetails.orElse(null);
    }

    public User1Details createUserDetails(User1Details user1Details) {
        return user1DetailsRepository.save(user1Details);
    }

    public User1Details updateUserDetails(int id, User1Details user1Details) {
        user1Details.setUserid(id); // Ensure the correct id is set
        return user1DetailsRepository.save(user1Details);
    }

    public void deleteUserDetails(int id) {
        user1DetailsRepository.deleteById(id);
    }
}
