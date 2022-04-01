package se.journer.journer.dao;

import se.journer.journer.models.player.Player;

public class GameDAO  {
    private int startMoney = 20000;

    public Player createPlayer(String name){
        return new Player(name, startMoney);
    }
}
