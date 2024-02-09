package com.example.corpsymph.controller;

import com.example.corpsymph.entity.BookedEvents;
import com.example.corpsymph.service.BookedEventsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/booked-events")
public class BookedEventsController {

    @Autowired
    private BookedEventsService bookedEventsService;

    @GetMapping
    public List<BookedEvents> getAllBookedEvents() {
        return bookedEventsService.getAllBookedEvents();
    }

    @GetMapping("/{id}")
    public BookedEvents getBookedEventById(@PathVariable int id) {
        return bookedEventsService.getBookedEventById(id);
    }

    @PostMapping
    public BookedEvents createBookedEvent(@RequestBody BookedEvents bookedEvents) {
        return bookedEventsService.createBookedEvent(bookedEvents);
    }

    @PutMapping("/{id}")
    public BookedEvents updateBookedEvent(@PathVariable int id, @RequestBody BookedEvents bookedEvents) {
        return bookedEventsService.updateBookedEvent(id, bookedEvents);
    }

    @DeleteMapping("/{id}")
    public void deleteBookedEvent(@PathVariable int id) {
        bookedEventsService.deleteBookedEvent(id);
    }
}
