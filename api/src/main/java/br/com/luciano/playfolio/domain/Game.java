package br.com.luciano.playfolio.domain;

import br.com.luciano.playfolio.security.domain.UserAccount;
import lombok.*;

import javax.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.EnumType.STRING;
import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Builder @AllArgsConstructor @NoArgsConstructor
@Getter @Setter
@EqualsAndHashCode(of = "id") @ToString(of = "id")
public class Game {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    private Long appId;
    private String name;
    private String description;
    private String image;
    private LocalDateTime publishDate;

    @Enumerated(value = STRING)
    private Status status;

    @ManyToMany(mappedBy = "games")
    private List<UserAccount> users = new ArrayList<>();
}
