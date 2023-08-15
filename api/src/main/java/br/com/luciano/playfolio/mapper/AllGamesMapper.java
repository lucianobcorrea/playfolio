package br.com.luciano.playfolio.mapper;

import br.com.luciano.playfolio.controller.response.AllUsersGamesResponse;
import br.com.luciano.playfolio.domain.Game;

public class AllGamesMapper {

    public static AllUsersGamesResponse toResponse(Game entity) {
        return AllUsersGamesResponse.builder()
                .userId(entity.getUsers().stream().iterator().next().getId())
                .userImage(entity.getUsers().stream().iterator().next().getImage())
                .userName(entity.getUsers().stream().iterator().next().getName())
                .id(entity.getId())
                .appId(entity.getAppId())
                .name(entity.getName())
                .description(entity.getDescription())
                .image(entity.getImage())
                .status(entity.getStatus())
                .publishDate(entity.getPublishDate())
                .build();
    }
}
