package br.com.luciano.playfolio.security.controller.request;

import io.micrometer.core.lang.Nullable;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter @Setter
public class UserRequest {

    @NotBlank(message = "Name cannot be empty")
    private String name;

    @NotNull @Email
    private String email;

    @NotBlank(message = "Password cannot be empty")
    private String password;

    @Nullable
    private String image;
}
