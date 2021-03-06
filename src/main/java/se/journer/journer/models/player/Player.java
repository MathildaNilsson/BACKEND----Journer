package se.journer.journer.models.player;

import se.journer.journer.models.backpack.Backpack;
import se.journer.journer.models.cities.City;
import se.journer.journer.models.items.Item;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class Player {
    private String name;
    private int money;
    private int energy;
    private Backpack backpack;
    private int completedCities;


    public Player(String name, int money, int energy) {
        this.name = name;
        this.money = money;
        this.energy = energy;
        this.backpack = new Backpack();
    }

    public int getEnergy() {
        return energy;
    }

    public void setEnergy(int energy) {
        this.energy = energy;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMoney() {
        return money;
    }

    public void setMoney(int money) {
        this.money = money;
    }

    public void removeMoney(int money){
        this.money -= money;
    }

    public void addMoney(int money){
        this.money += money;
    }

    public void removeEnergy(int energy){
        this.energy -= energy;
    }

    public void addEnergy(int energy){
        this.energy += energy;
    }

    public void addToBackpack(Item item){
        this.backpack.addToBackpack(item);
    }

    public List<Item> getBackpack() {
        return backpack.getBackpackList();
    }

    public void removeFromBackpack(String item){
        this.backpack.removeFromBackpack(item);
    }

    public void countCompletedCities() {
        List<String> templist = new ArrayList<>();

        for(Item item : backpack.getBackpackList()) {
            if( (!item.getName().equalsIgnoreCase("Energydrink")) && (!item.getName().equalsIgnoreCase("Pepperspray")) )
                if(!templist.contains(item.getName())){
                templist.add(item.getName());
            }
        }
        completedCities = templist.size();
        }

    public int getCompletedCities() {
        return completedCities;
    }
}

