package com.example.corpsymph.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class BookedEvents {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookingId;
    private String eventName;
    private String eventEmail;
    private String eventBookedDate;
    private String eventDate;
    private String eventDescription;

    public BookedEvents(int bookingId, String eventName, String eventEmail, String eventBookedDate, String eventDate,
            String eventDescription) {
        this.bookingId = bookingId;
        this.eventName = eventName;
        this.eventEmail = eventEmail;
        this.eventBookedDate = eventBookedDate;
        this.eventDate = eventDate;
        this.eventDescription = eventDescription;
    }

    public BookedEvents() {

    }

    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getEventEmail() {
        return eventEmail;
    }

    public void setEventEmail(String eventEmail) {
        this.eventEmail = eventEmail;
    }

    public String getEventBookedDate() {
        return eventBookedDate;
    }

    public void setEventBookedDate(String eventBookedDate) {
        this.eventBookedDate = eventBookedDate;
    }

    public String getEventDate() {
        return eventDate;
    }

    public void setEventDate(String eventDate) {
        this.eventDate = eventDate;
    }

    public String getEventDescription() {
        return eventDescription;
    }

    public void setEventDescription(String eventDescription) {
        this.eventDescription = eventDescription;
    }

    @Override
    public String toString() {
        return "BookedEvents [bookingId=" + bookingId + ", eventName=" + eventName + ", eventEmail=" + eventEmail
                + ", eventBookedDate=" + eventBookedDate + ", eventDate=" + eventDate + ", eventDescription="
                + eventDescription + "]";
    }

}
