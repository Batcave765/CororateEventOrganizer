package com.example.corpsymph.service;

import java.util.List;

import com.example.corpsymph.entity.Login;
import com.example.corpsymph.entity.LoginDto;

public interface LoginService {

	String addUser1(LoginDto user1dto);

	List<Login> getUser1();

}