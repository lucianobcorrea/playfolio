package br.com.luciano.playfolio.service;

import br.com.luciano.playfolio.domain.Game;
import br.com.luciano.playfolio.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.UNPROCESSABLE_ENTITY;

@Service
public class SearchGameService {

    @Autowired
    private GameRepository gameRepository;

    public Game byId(Long gameId) {
        return gameRepository.findById(gameId)
                .orElseThrow(() -> new ResponseStatusException(UNPROCESSABLE_ENTITY, "Game not found"));
    }
}
