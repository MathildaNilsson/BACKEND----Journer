package se.journer.journer.models.player;

public class Player {
    private String name;
    private int money;
    //Backpack
    //Visited cities?

    public Player(String name, int money) {
        this.name = name;
        this.money = money;
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
}
