package br.com.luciano.playfolio.service;

import br.com.luciano.playfolio.domain.Game;
import br.com.luciano.playfolio.repository.GameRepository;
import br.com.luciano.playfolio.security.domain.UserAccount;
import br.com.luciano.playfolio.security.service.AuthenticatedUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class DeleteGameService {

    @Autowired
    private AuthenticatedUserService authenticatedUserService;

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private SearchGameService searchGameService;

    @Autowired
    private RegisteredUserGameService registeredUserGameService;

    @Transactional
    public void deleteGame(Long gameId) {

        UserAccount user = authenticatedUserService.get();

        registeredUserGameService.validateUserOwnsGame(gameId, user);

        Game game = searchGameService.byId(gameId);

        user.deleteGame(game);

        gameRepository.save(game);
    }
}
