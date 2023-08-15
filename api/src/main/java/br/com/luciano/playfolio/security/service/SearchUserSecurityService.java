package br.com.luciano.playfolio.security.service;

import br.com.luciano.playfolio.security.UserSecurity;
import br.com.luciano.playfolio.security.repository.UserRepository;
import br.com.luciano.playfolio.security.domain.UserAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class SearchUserSecurityService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserAccount userAccount = userRepository.findByEmail(email);
        return new UserSecurity(userAccount);
    }
}
