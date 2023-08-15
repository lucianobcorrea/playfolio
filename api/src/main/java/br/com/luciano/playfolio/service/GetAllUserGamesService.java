package br.com.luciano.playfolio.service;

import br.com.luciano.playfolio.controller.response.GameResponse;
import br.com.luciano.playfolio.mapper.GameMapper;
import br.com.luciano.playfolio.repository.GameRepository;
import br.com.luciano.playfolio.security.domain.UserAccount;
import br.com.luciano.playfolio.security.service.AuthenticatedUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class GetAllUserGamesService {

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private AuthenticatedUserService authenticatedUserService;

    public Page<GameResponse> getAllUserGames(Pageable pageable) {

        UserAccount user = authenticatedUserService.get();

        return gameRepository.findAllById(user.getId(), pageable)
                .map(GameMapper::toResponse);
    }
}
