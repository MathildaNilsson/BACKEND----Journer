package se.journer.journer.models.shop;

import se.journer.journer.models.items.EnergyDrink;
import se.journer.journer.models.items.Item;
import se.journer.journer.models.items.Pepperspray;

import java.util.ArrayList;
import java.util.List;

public class Shop {
    private int peppersprayPrice = 250;
    private int energyDrinkPrice = 250;
    private int energyByDrink = 35;
    private List<Item> shopList;

    public Shop() {
        this.shopList = new ArrayList<>();
        stockShop();
    }

    public Pepperspray buyPepperspray(){
        return new Pepperspray("Pepperspray", peppersprayPrice);
    }

    public EnergyDrink buyEnergyDrink(){
        return new EnergyDrink("Energydrink", energyDrinkPrice, energyByDrink);
    }

    public void stockShop(){
        shopList.add(new Pepperspray("Pepperspray", peppersprayPrice));
        shopList.add(new EnergyDrink("Energydrink", energyDrinkPrice, energyByDrink));
    }

    public int getPeppersprayPrice() {
        return peppersprayPrice;
    }

    public int getEnergyDrinkPrice() {
        return energyDrinkPrice;
    }

    public int getEnergyByDrink() {
        return energyByDrink;
    }

    public List<Item> getShopList() {
        return shopList;
    }
}