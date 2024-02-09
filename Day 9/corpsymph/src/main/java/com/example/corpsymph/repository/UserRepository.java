package com.example.corpsymph.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.corpsymph.entity.Register;

public interface UserRepository extends JpaRepository<Register, Integer> {
    Optional<Register> findByEmail(String email);
}
