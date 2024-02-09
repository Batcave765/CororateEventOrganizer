package com.example.corpsymph.service;

import com.example.corpsymph.entity.EventList;
import com.example.corpsymph.repository.EventListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventListService {

    @Autowired
    private EventListRepository eventListRepository;

    public List<EventList> getAllEvents() {
        return eventListRepository.findAll();
    }

    public EventList getEventById(int id) {
        Optional<EventList> optionalEvent = eventListRepository.findById(id);
        return optionalEvent.orElse(null);
    }

    public EventList createEvent(EventList eventList) {
        return eventListRepository.save(eventList);
    }

    public EventList updateEvent(int id, EventList eventList) {
        eventList.setEventId(id); // Ensure the correct id is set
        return eventListRepository.save(eventList);
    }

    public void deleteEvent(int id) {
        eventListRepository.deleteById(id);
    }
}
