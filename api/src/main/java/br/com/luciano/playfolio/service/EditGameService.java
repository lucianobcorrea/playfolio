package br.com.luciano.playfolio.service;

import br.com.luciano.playfolio.controller.request.EditGameRequest;
import br.com.luciano.playfolio.domain.Game;
import br.com.luciano.playfolio.repository.GameRepository;
import br.com.luciano.playfolio.security.domain.UserAccount;
import br.com.luciano.playfolio.security.service.AuthenticatedUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class EditGameService {

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private SearchGameService searchGameService;

    @Autowired
    private AuthenticatedUserService authenticatedUserService;

    @Autowired
    private RegisteredUserGameService registeredUserGameService;

    @Transactional
    public void editGame(EditGameRequest request, Long gameId) {

        UserAccount user = authenticatedUserService.get();
        Game game = searchGameService.byId(gameId);

        registeredUserGameService.validateUserOwnsGame(gameId, user);

        game.setStatus(request.getStatus());

        gameRepository.save(game);
    }
}
