package se.journer.journer.models.player;

public class Player {
    private String name;
    private int money;
    private int energy;
    //Backpack
    //Visited cities?


    public Player(String name, int money, int energy) {
        this.name = name;
        this.money = money;
        this.energy = energy;
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
}

