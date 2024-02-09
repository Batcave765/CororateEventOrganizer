package com.example.corpsymph.controller;

import com.example.corpsymph.entity.EventList;
import com.example.corpsymph.service.EventListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/event-list")
public class EventListController {

    @Autowired
    private EventListService eventListService;

    @GetMapping
    public List<EventList> getAllEvents() {
        return eventListService.getAllEvents();
    }

    @GetMapping("/{id}")
    public EventList getEventById(@PathVariable int id) {
        return eventListService.getEventById(id);
    }

    @PostMapping
    public EventList createEvent(@RequestBody EventList eventList) {
        return eventListService.createEvent(eventList);
    }

    @PutMapping("/{id}")
    public EventList updateEvent(@PathVariable int id, @RequestBody EventList eventList) {
        return eventListService.updateEvent(id, eventList);
    }

    @DeleteMapping("/{id}")
    public void deleteEvent(@PathVariable int id) {
        eventListService.deleteEvent(id);
    }
}
