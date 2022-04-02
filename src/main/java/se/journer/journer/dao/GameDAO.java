package se.journer.journer.dao;

import org.springframework.stereotype.Repository;
import se.journer.journer.models.player.Player;

@Repository
public class GameDAO  {
    private int startMoney = 20000;

    public Player createPlayer(String name){
        return new Player(name, startMoney);
    }
}
