package br.com.luciano.playfolio.repository;

import br.com.luciano.playfolio.domain.Game;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface GameRepository extends JpaRepository<Game, Long> {
    @Query("SELECT g FROM Game g JOIN g.users u WHERE u.id = :userId")
    Page<Game> findAllById(Long userId, Pageable pageable);

    @Query("select case when count(g) > 0 then true else false end from Game g join g.users u where g.appId = :appId and u.id = :id")
    boolean existsByUser(@Param("appId") Long appId, @Param("id")Long id);

    @Query("select case when count(g) > 0 then true else false end from Game g join g.users u where g.id = :gameId and u.id = :id")
    boolean gameIdExistsByUser(@Param("gameId") Long gameId, @Param("id")Long id);

    @Query("select g from Game g join g.users u")
    Page<Game> findAllByUsers(Pageable pageable);
}
