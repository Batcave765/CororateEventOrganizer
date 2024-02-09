package com.example.corpsymph.service;

import org.springframework.security.authentication.AuthenticationManager;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.corpsymph.dto.request.AuthenticationRequest;
import com.example.corpsymph.dto.request.RegisterRequest;
import com.example.corpsymph.dto.response.AuthenticationResponse;
import com.example.corpsymph.entity.Register;
import com.example.corpsymph.entity.Role;
import com.example.corpsymph.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

        private final UserRepository userRepository;
        private final PasswordEncoder passwordEncoder;
        private final JwtService jwtService;
        private final AuthenticationManager authenticationManager;

        public AuthenticationResponse register(RegisterRequest request) {
                var user = Register
                                .builder()
                                .name(request.getName())
                                .email(request.getEmail())
                                .password(passwordEncoder.encode(request.getPassword()))
                                // .address(request.getAddress())
                                .role(Role.USER)
                                .build();
                userRepository.save(user);
                var jwtToken = jwtService.generateToken(user);
                return AuthenticationResponse.builder()
                                .token(jwtToken)
                                .build();
        }

        public AuthenticationResponse authenticate(AuthenticationRequest request) {
                authenticationManager.authenticate(
                                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
                var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
                var jwtToken = jwtService.generateToken(user);
                return AuthenticationResponse.builder()
                                .token(jwtToken)
                                .build();
        }

}
