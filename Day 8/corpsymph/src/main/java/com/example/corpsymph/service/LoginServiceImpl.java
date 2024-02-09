package com.example.corpsymph.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.corpsymph.entity.Login;
import com.example.corpsymph.entity.LoginDto;
import com.example.corpsymph.repository.LoginRepo;

@Service
public class LoginServiceImpl implements LoginService {

        @Autowired
        private LoginRepo user1Repo;

        @Override
        public String addUser1(LoginDto user1dto) {
                Login user = new Login(
                                user1dto.getId(),
                                user1dto.getUserName(),
                                user1dto.getEmail(),
                                user1dto.getmPassword()

                );
                user1Repo.save(user);
                return user.getUserName();
        }

        public List<Login> getUser1() {
                return user1Repo.findAll();

        }
}