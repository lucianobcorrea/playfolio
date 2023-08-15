package br.com.luciano.playfolio.security.service;

import br.com.luciano.playfolio.security.controller.request.EditUserRequest;
import br.com.luciano.playfolio.security.domain.UserAccount;
import br.com.luciano.playfolio.security.repository.UserRepository;
import br.com.luciano.playfolio.validator.ImageValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class EditUserService {

    @Autowired
    private ImageValidator imageValidator;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticatedUserService authenticatedUserService;

    @Transactional
    public void edit(EditUserRequest request) {

        String image = imageValidator.profileHasImage(request.getImage());
        imageValidator.validateImageExtension(image);
        UserAccount user = authenticatedUserService.get();

        user.setImage(image);
        user.setName(request.getName());

        userRepository.save(user);
    }
}
