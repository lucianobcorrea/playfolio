package br.com.luciano.playfolio.security.controller;

import br.com.luciano.playfolio.security.controller.response.UserResponse;
import br.com.luciano.playfolio.security.service.SearchUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private SearchUserService searchUserService;

    @PostMapping
    public UserResponse login() {
        return searchUserService.search();
    }
}
