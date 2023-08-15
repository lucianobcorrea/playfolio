package br.com.luciano.playfolio.mapper;

import br.com.luciano.playfolio.controller.request.GameRequest;
import br.com.luciano.playfolio.controller.response.GameResponse;
import br.com.luciano.playfolio.domain.Game;

import static java.time.LocalDateTime.now;

public class GameMapper {
    public static GameResponse toResponse(Game entity) {
        return GameResponse.builder()
                .id(entity.getId())
                .appId(entity.getAppId())
                .name(entity.getName())
                .description(entity.getDescription())
                .image(entity.getImage())
                .status(entity.getStatus())
                .publishDate(entity.getPublishDate())
                .build();
    }

    public static Game toEntity(GameRequest request) {
        return Game.builder()
                .appId(request.getAppId())
                .name(request.getName())
                .description(request.getDescription())
                .image(request.getImage())
                .status(request.getStatus())
                .publishDate(now())
                .build();
    }
}
