package br.com.luciano.playfolio.security.domain;

import br.com.luciano.playfolio.domain.Game;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.List;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Getter @Setter @EqualsAndHashCode(of = "id") @ToString(of = "id")
public class UserAccount {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String password;
    private String image;
    private boolean active;

    @ManyToMany
    @JoinTable(name = "user_game",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "game_id"))
    private List<Game> games = new ArrayList<>();

    public void addGame(Game game) {
        this.getGames().add(game);
    }

    public void deleteGame(Game game) {
        this.getGames().remove(game);
    }
}
