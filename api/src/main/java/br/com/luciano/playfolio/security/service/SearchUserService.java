package br.com.luciano.playfolio.security.service;

import br.com.luciano.playfolio.security.controller.response.UserResponse;
import br.com.luciano.playfolio.security.domain.UserAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static br.com.luciano.playfolio.security.mapper.UserMapper.toResponse;

@Service
public class SearchUserService {

    @Autowired
    private AuthenticatedUserService authenticatedUserService;

    public UserResponse search() {
        UserAccount userAccountAuthenticate = authenticatedUserService.get();
        return toResponse(userAccountAuthenticate);
    }
}
