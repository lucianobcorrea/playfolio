package br.com.luciano.playfolio.service;

import br.com.luciano.playfolio.controller.request.GameRequest;
import br.com.luciano.playfolio.domain.Game;
import br.com.luciano.playfolio.repository.GameRepository;
import br.com.luciano.playfolio.security.domain.UserAccount;
import br.com.luciano.playfolio.security.service.AuthenticatedUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import static br.com.luciano.playfolio.mapper.GameMapper.toEntity;
import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class AddGameService {

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private AuthenticatedUserService authenticatedUserService;

    @Transactional
    public void addGame(GameRequest request) {

        UserAccount user = authenticatedUserService.get();

        if(gameRepository.existsByUser(request.getAppId(), user.getId())) {
            throw new ResponseStatusException(BAD_REQUEST, "Game already registered in your account");
        }

        Game game = toEntity(request);

        user.addGame(game);

        gameRepository.save(game);
    }
}
