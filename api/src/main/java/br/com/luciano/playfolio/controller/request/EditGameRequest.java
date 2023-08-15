package br.com.luciano.playfolio.controller.request;

import br.com.luciano.playfolio.domain.Status;
import lombok.*;

import javax.validation.constraints.NotNull;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EditGameRequest {

    @NotNull(message = "Status cannot be empty")
    private Status status;
}
