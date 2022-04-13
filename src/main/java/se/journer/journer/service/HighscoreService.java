package se.journer.journer.service;

import org.springframework.stereotype.Service;
import se.journer.journer.dao.HighscoreDAO;
import se.journer.journer.models.highscore.Highscore;

import java.util.List;

@Service
public class HighscoreService {

    HighscoreDAO highscoreDAO;

    public HighscoreService(HighscoreDAO highscoreDAO) {
        this.highscoreDAO = highscoreDAO;
    }

    public List<Highscore> getHighscore() {
        return (List<Highscore>) highscoreDAO.getHighscore();
    }

    public Highscore addHighscore(Highscore highscore) {
        return highscoreDAO.saveHighscore(highscore);
    }
}
