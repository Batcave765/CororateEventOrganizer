package com.example.corpsymph.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class outputTest {
    @GetMapping("/test")
    public String test() {
        return "Hello World";
    }
}
