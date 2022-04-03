package se.journer.journer.service;

import org.springframework.stereotype.Service;
import se.journer.journer.dao.GameDAO;
import se.journer.journer.models.items.Item;
import se.journer.journer.models.items.Pepperspray;
import se.journer.journer.models.player.Player;

import java.util.List;

@Service
public class GameService {
    GameDAO gameDAO;

    public GameService(GameDAO gameDAO) {
        this.gameDAO = gameDAO;
    }

    public void createPlayer(String name){
        gameDAO.createPlayer(name);
    }

    public Player getPlayerByName() {
        return gameDAO.getPlayerByName();
    }

    public int getPlayersCurrentMoney() {
        return gameDAO.getPlayersCurrentMoney();
    }

    public void removeMoney(int value) {
        gameDAO.removeMoney(value);
    }

    public void addMoney(int value) {
        gameDAO.addMoney(value);
    }

    public int getPlayersCurrentEnergy() {
        return gameDAO.getPlayersCurrentEnergy();
    }

    public void removeEnergy(int value) {
        gameDAO.removeEnergy(value);
    }

    public void addEnergy(int value) {
        gameDAO.addEnergy(value);
    }

    public void addPeppersprayToBackpack() {
        gameDAO.addPeppersprayToBackpack();
    }

    public List<Item> displayBackpack() {
        return gameDAO.displayBackpack();
    }
}
