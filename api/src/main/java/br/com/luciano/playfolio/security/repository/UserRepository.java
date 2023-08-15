package br.com.luciano.playfolio.security.repository;

import br.com.luciano.playfolio.security.domain.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserAccount, Long> {

    UserAccount findByEmail(String email);

    boolean existsByEmail(String email);
}
