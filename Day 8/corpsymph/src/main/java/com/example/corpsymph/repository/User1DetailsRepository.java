package com.example.corpsymph.repository;

import com.example.corpsymph.entity.User1Details;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface User1DetailsRepository extends JpaRepository<User1Details, Integer> {
}
