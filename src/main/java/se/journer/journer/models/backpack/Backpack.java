package se.journer.journer.models.backpack;

import se.journer.journer.models.items.Item;

import java.util.ArrayList;
import java.util.List;

public class Backpack {
    private List<Item> backpackList;

    public Backpack() {
        this.backpackList = new ArrayList<>();
    }

    public List<Item> getBackpackList() {
        return backpackList;
    }

    public void setBackpackList(List<Item> backpackList) {
        this.backpackList = backpackList;
    }

    public void addToBackpack(Item item){
        this.backpackList.add(item);
    }

    public void removeFromBackpack(String item){
        for(Item thing : backpackList){
            if(thing.getName().equalsIgnoreCase(item)){
                backpackList.remove(thing);
                break;
            }
        }
    }
}
