package se.journer.journer.service;

import org.springframework.stereotype.Service;
import se.journer.journer.dao.GameDAO;
import se.journer.journer.models.player.Player;

@Service
public class GameService {
    GameDAO gameDAO;

    public GameService(GameDAO gameDAO) {
        this.gameDAO = gameDAO;
    }

    public Player getPlayer(String name){
        return  gameDAO.createPlayer(name);
    }
}
