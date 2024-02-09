package com.example.corpsymph.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.corpsymph.entity.Login;

@Repository

public interface LoginRepo extends JpaRepository<Login, Integer> {

}