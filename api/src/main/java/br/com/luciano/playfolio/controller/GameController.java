package br.com.luciano.playfolio.controller;

import br.com.luciano.playfolio.controller.request.EditGameRequest;
import br.com.luciano.playfolio.controller.request.GameRequest;
import br.com.luciano.playfolio.controller.response.AllUsersGamesResponse;
import br.com.luciano.playfolio.controller.response.GameResponse;
import br.com.luciano.playfolio.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static org.springframework.http.HttpStatus.*;

@RestController
@RequestMapping("/games")
public class GameController {

    @Autowired
    private AddGameService addGameService;

    @Autowired
    private GetAllUserGamesService getAllUserGamesService;

    @Autowired
    private EditGameService editGameService;

    @Autowired
    private DeleteGameService deleteGameService;

    @Autowired
    private GetAllGamesService getAllGamesService;

    @GetMapping
    @ResponseStatus(OK)
    public Page<AllUsersGamesResponse> getAllGames(Pageable pageable) {
        return getAllGamesService.getAllGames(pageable);
    }

    @GetMapping("/me")
    @ResponseStatus(OK)
    public Page<GameResponse> getAllUserGames(Pageable pageable) {
        return getAllUserGamesService.getAllUserGames(pageable);
    }

    @PostMapping("/add")
    @ResponseStatus(CREATED)
    public void addGame(@Valid @RequestBody GameRequest request) {
        addGameService.addGame(request);
    }

    @PatchMapping("/{gameId}/edit")
    @ResponseStatus(NO_CONTENT)
    public void editGame(@Valid @RequestBody EditGameRequest request, @PathVariable Long gameId) {
        editGameService.editGame(request, gameId);
    }

    @DeleteMapping("/{gameId}/delete")
    @ResponseStatus(NO_CONTENT)
    public void deleteGame(@PathVariable Long gameId) {
        deleteGameService.deleteGame(gameId);
    }
}
