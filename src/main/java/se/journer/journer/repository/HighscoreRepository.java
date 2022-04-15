package se.journer.journer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import se.journer.journer.models.highscore.Highscore;

public interface HighscoreRepository extends JpaRepository<Highscore, Integer> {
}
