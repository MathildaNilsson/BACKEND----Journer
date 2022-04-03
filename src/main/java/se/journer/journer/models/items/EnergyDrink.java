package se.journer.journer.models.items;

public class EnergyDrink extends Item {
    private int energy;

    public EnergyDrink(String name, int price, int energy) {
        super(name, price);
        this.energy = energy;
    }
}
