package se.journer.journer.dao;

import org.springframework.stereotype.Repository;
import se.journer.journer.models.player.Player;

@Repository
public class GameDAO  {
    private int startMoney = 20000;
    private int startEnergy = 100;
    Player player;

    public void createPlayer(String name){
        this.player = new Player(name, startMoney, startEnergy);
    }

    public Player getPlayerByName() {
        return player;
    }

    public int getPlayersCurrentMoney() {
        return player.getMoney();
    }

    public void removeMoney(int value) {
        player.removeMoney(value);
    }

    public void addMoney(int value) {
        player.addMoney(value);
    }

    public int getPlayersCurrentEnergy() {
        return player.getEnergy();
    }

    public void removeEnergy(int value) {
        player.removeEnergy(value);
    }

    public void addEnergy(int value) {
        player.addEnergy(value);
    }
}
