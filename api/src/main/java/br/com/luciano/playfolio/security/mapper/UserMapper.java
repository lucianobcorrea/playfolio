package br.com.luciano.playfolio.security.mapper;

import br.com.luciano.playfolio.security.controller.request.UserRequest;
import br.com.luciano.playfolio.security.controller.response.UserResponse;
import br.com.luciano.playfolio.security.domain.UserAccount;

public class UserMapper {

    public static UserAccount toEntity(UserRequest request, String image) {
        UserAccount entity = new UserAccount();
        entity.setName(request.getName());
        entity.setEmail(request.getEmail());
        entity.setImage(image);
        return entity;
    }

    public static UserResponse toResponse(UserAccount entity) {
        return UserResponse.builder()
                .name(entity.getName())
                .email(entity.getEmail())
                .image(entity.getImage())
                .build();
    }
}
