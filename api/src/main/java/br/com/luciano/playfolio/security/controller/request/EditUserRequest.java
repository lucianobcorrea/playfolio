package br.com.luciano.playfolio.security.controller.request;

import lombok.Getter;
import lombok.Setter;
import javax.validation.constraints.NotBlank;

@Getter @Setter
public class EditUserRequest {

    @NotBlank(message = "Name cannot be empty")
    private String name;

    private String image;
}
