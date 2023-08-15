package br.com.luciano.playfolio.security.service;

import br.com.luciano.playfolio.security.UserSecurity;
import br.com.luciano.playfolio.security.repository.UserRepository;
import br.com.luciano.playfolio.security.domain.UserAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;

@Service
public class AuthenticatedUserService {

    @Autowired
    private UserRepository userRepository;

    public Long getId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserSecurity userSecurity = (UserSecurity) authentication.getPrincipal();
        return userSecurity.getId();
    }

    public UserAccount get() {
        return userRepository.findById(getId())
                .orElseThrow(() -> new ResponseStatusException(INTERNAL_SERVER_ERROR, "Usuário não existe ou não está autenticado"));
    }
}
