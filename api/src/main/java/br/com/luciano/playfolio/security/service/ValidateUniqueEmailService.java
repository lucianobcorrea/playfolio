package br.com.luciano.playfolio.security.service;

import br.com.luciano.playfolio.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY;

@Service
public class ValidateUniqueEmailService {

    @Autowired
    private UserRepository userRepository;

    public void validateEmail(String email) {

        if(userRepository.existsByEmail(email)) {
            throw new ResponseStatusException(UNPROCESSABLE_ENTITY, "There is already a user with this email");
        }
    }
}
