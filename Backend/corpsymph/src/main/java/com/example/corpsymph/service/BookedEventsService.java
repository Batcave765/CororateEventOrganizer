package com.example.corpsymph.service;

import com.example.corpsymph.entity.BookedEvents;
import com.example.corpsymph.repository.BookedEventsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookedEventsService {

    @Autowired
    private BookedEventsRepository bookedEventsRepository;

    public List<BookedEvents> getAllBookedEvents() {
        return bookedEventsRepository.findAll();
    }

    public BookedEvents getBookedEventById(int id) {
        Optional<BookedEvents> optionalBookedEvent = bookedEventsRepository.findById(id);
        return optionalBookedEvent.orElse(null);
    }

    public BookedEvents createBookedEvent(BookedEvents bookedEvents) {
        return bookedEventsRepository.save(bookedEvents);
    }

    public BookedEvents updateBookedEvent(int id, BookedEvents bookedEvents) {
        bookedEvents.setBookingId(id); // Ensure the correct id is set
        return bookedEventsRepository.save(bookedEvents);
    }

    public void deleteBookedEvent(int id) {
        bookedEventsRepository.deleteById(id);
    }
}
