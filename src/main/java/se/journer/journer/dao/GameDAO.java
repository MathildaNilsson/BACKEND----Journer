package se.journer.journer.dao;

import org.springframework.stereotype.Repository;
import se.journer.journer.models.items.Item;
import se.journer.journer.models.player.Player;
import se.journer.journer.models.shop.Shop;

import java.util.List;

@Repository
public class GameDAO  {
    private int startMoney = 20000;
    private int startEnergy = 100;
    Player player;
    Shop shop = new Shop();

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

    public void addPeppersprayToBackpack() {
        player.addToBackpack(shop.buyPepperspray());
    }

    public void addEnergyDrinkToBackpack() {
        player.addToBackpack(shop.buyEnergyDrink());
    }

   public List<Item> displayBackpack() {
       return player.getBackpack();
   }

    public List<Item> displayShop() {
        return shop.getShopList();
    }
}