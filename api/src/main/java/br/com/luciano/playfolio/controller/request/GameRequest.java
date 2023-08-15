package br.com.luciano.playfolio.controller.request;

import br.com.luciano.playfolio.domain.Status;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Builder
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class GameRequest {
    @NonNull
    private Long appId;
    @NotBlank(message = "Name cannot be empty")
    private String name;
    @NotBlank(message = "Description cannot be empty")
    private String description;
    @NotBlank(message = "Image cannot be empty")
    private String image;
    @NotNull(message = "Status cannot be empty")
    private Status status;
}
