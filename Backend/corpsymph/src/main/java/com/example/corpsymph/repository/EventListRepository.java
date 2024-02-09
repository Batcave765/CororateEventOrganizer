package com.example.corpsymph.repository;

import com.example.corpsymph.entity.EventList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventListRepository extends JpaRepository<EventList, Integer> {
}
