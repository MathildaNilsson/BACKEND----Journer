package se.journer.journer.models.transportation;

public class Transportation {
    private String name;
    private int price;
    private int energyToGain;

    public Transportation(String name, int price, int energyToGain) {
        this.name = name;
        this.price = price;
        this.energyToGain = energyToGain;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getEnergyToGain() {
        return energyToGain;
    }

    public void setEnergyToGain(int energyToGain) {
        this.energyToGain = energyToGain;
    }
}
