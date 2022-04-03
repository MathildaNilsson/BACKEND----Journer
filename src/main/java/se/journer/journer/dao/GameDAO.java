package se.journer.journer.dao;

import org.springframework.stereotype.Repository;
import se.journer.journer.models.player.Player;

@Repository
public class GameDAO  {
    private int startMoney = 20000;
    Player player;

    public void createPlayer(String name){
        this.player = new Player(name, startMoney);
    }

    public Player getPlayerByName() {
        return player;
    }

    public int getPlayersCurrentMoney() {
        return player.getMoney();
    }
}
