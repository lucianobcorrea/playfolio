package br.com.luciano.playfolio.service;

import br.com.luciano.playfolio.controller.response.AllUsersGamesResponse;
import br.com.luciano.playfolio.mapper.AllGamesMapper;
import br.com.luciano.playfolio.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class GetAllGamesService {

    @Autowired
    private GameRepository gameRepository;

    public Page<AllUsersGamesResponse> getAllGames(Pageable pageable) {

        return gameRepository.findAllByUsers(pageable)
                .map(AllGamesMapper::toResponse);
    }
}
