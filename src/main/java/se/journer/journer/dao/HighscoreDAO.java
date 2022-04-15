package se.journer.journer.dao;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;
import se.journer.journer.models.highscore.Highscore;
import se.journer.journer.repository.HighscoreRepository;

@Repository
public class HighscoreDAO {

    HighscoreRepository repository;

    public HighscoreDAO(HighscoreRepository repository) {
        this.repository = repository;
    }

    public Iterable<Highscore> getHighscore() {
        return repository.findAll(Sort.by(Sort.Direction.DESC,"completedCities").and(Sort.by(Sort.Direction.DESC,"money")));
    }

    public Highscore saveHighscore(Highscore highscore){
        return repository.save(highscore);
    }


}
