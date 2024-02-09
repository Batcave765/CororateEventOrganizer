package com.example.corpsymph.repository;

import com.example.corpsymph.entity.BookedEvents;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookedEventsRepository extends JpaRepository<BookedEvents, Integer> {
}
