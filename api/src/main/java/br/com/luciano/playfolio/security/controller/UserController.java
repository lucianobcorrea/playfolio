package br.com.luciano.playfolio.security.controller;

import br.com.luciano.playfolio.security.controller.request.EditUserRequest;
import br.com.luciano.playfolio.security.controller.request.UserRequest;
import br.com.luciano.playfolio.security.controller.response.UserResponse;
import br.com.luciano.playfolio.security.service.EditUserService;
import br.com.luciano.playfolio.security.service.SearchUserService;
import br.com.luciano.playfolio.security.service.AddUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static org.springframework.http.HttpStatus.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private AddUserService addUserService;

    @Autowired
    private SearchUserService searchUserService;

    @Autowired
    private EditUserService editUserService;

    @PostMapping
    @ResponseStatus(CREATED)
    public UserResponse add(@Valid @RequestBody UserRequest request) {
        return addUserService.add(request);
    }

    @GetMapping("/me")
    @ResponseStatus(OK)
    public UserResponse search() {
        return searchUserService.search();
    }

    @PatchMapping("/me/edit")
    @ResponseStatus(NO_CONTENT)
    public void edit(@Valid @RequestBody EditUserRequest request) {
        editUserService.edit(request);
    }
}
