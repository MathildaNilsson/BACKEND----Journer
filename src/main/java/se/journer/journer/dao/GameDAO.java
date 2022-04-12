package se.journer.journer.dao;

import com.sun.jdi.connect.Transport;
import org.springframework.stereotype.Repository;
import se.journer.journer.models.items.Item;
import se.journer.journer.models.player.Player;
import se.journer.journer.models.shop.Shop;
import se.journer.journer.models.transportation.Station;
import se.journer.journer.models.transportation.Transportation;

import java.util.List;

@Repository
public class GameDAO  {
    private int startMoney = 20000;
    private int startEnergy = 100;
    Player player;
    Shop shop = new Shop();
    Station station = new Station();

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

    public void addSouvenirToBackpack(String souvenirName) {
        player.addToBackpack(shop.buySouvenir(souvenirName));
    }

   public List<Item> displayBackpack() {
       return player.getBackpack();
   }

    public List<Item> displayShop() {
        return shop.getShopList();
    }

    public List<Transportation> displayStation() {
        return station.getTransportList();
    }

    public void removeItemFromBackPack(String item) {
        player.removeFromBackpack(item);
    }
}