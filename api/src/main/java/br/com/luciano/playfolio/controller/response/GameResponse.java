package br.com.luciano.playfolio.controller.response;

import br.com.luciano.playfolio.domain.Status;
import lombok.*;
import java.time.LocalDateTime;

@AllArgsConstructor @NoArgsConstructor @Builder
@Getter @Setter
public class GameResponse {
    private Long appId;
    private Long id;
    private String name;
    private String description;
    private String image;
    private Status status;
    private LocalDateTime publishDate;
}
