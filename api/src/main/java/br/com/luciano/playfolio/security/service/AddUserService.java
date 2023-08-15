package br.com.luciano.playfolio.security.service;

import br.com.luciano.playfolio.security.controller.request.UserRequest;
import br.com.luciano.playfolio.security.controller.response.UserResponse;
import br.com.luciano.playfolio.security.domain.UserAccount;
import br.com.luciano.playfolio.security.repository.UserRepository;
import br.com.luciano.playfolio.validator.ImageValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static br.com.luciano.playfolio.security.mapper.UserMapper.toEntity;
import static br.com.luciano.playfolio.security.mapper.UserMapper.toResponse;

@Service
public class AddUserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ImageValidator imageValidator;

    @Autowired
    private ValidateUniqueEmailService validateUniqueEmailService;

    @Transactional
    public UserResponse add(UserRequest request) {

        validateUniqueEmailService.validateEmail(request.getEmail());

        String image = imageValidator.profileHasImage(request.getImage());
        imageValidator.validateImageExtension(image);

        UserAccount userAccount = toEntity(request, image);
        userAccount.setPassword(passwordEncoder.encode(request.getPassword()));
        userAccount.setActive(true);

        userRepository.save(userAccount);

        return toResponse(userAccount);
    }
}
