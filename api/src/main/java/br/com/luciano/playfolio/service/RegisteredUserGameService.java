package br.com.luciano.playfolio.service;

import br.com.luciano.playfolio.repository.GameRepository;
import br.com.luciano.playfolio.security.domain.UserAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class RegisteredUserGameService {

    @Autowired
    private GameRepository gameRepository;

    public void validateUserOwnsGame(Long gameId, UserAccount user) {

        if(!gameRepository.gameIdExistsByUser(gameId, user.getId())) {
            throw new ResponseStatusException(BAD_REQUEST, "This is not your game");
        }
    }
}
