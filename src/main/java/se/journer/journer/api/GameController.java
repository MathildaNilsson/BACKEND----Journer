package se.journer.journer.api;

import com.sun.jdi.connect.Transport;
import org.springframework.web.bind.annotation.*;
import se.journer.journer.models.items.Item;
import se.journer.journer.models.player.Player;
import se.journer.journer.models.transportation.Transportation;
import se.journer.journer.service.GameService;

import java.util.List;

@RestController
@RequestMapping("/game")
@CrossOrigin
public class GameController {
    GameService gameService;

    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @PostMapping("/createplayer/{name}")
    public void createPlayer(@PathVariable ("name") String name){
        gameService.createPlayer(name);
    }

    @GetMapping("/getplayer")
    public Player getPlayerByName(){
        return gameService.getPlayerByName();
    }

    @GetMapping("/countcities")
    public void countCities(){
        getPlayerByName().countCompletedCities();
    }

    @GetMapping("/displaymoney")
    public int getPlayersCurrentMoney(){
        return gameService.getPlayersCurrentMoney();
    }

    @GetMapping("/displayenergy")
    public int getPlayersCurrentEnergy(){
        return gameService.getPlayersCurrentEnergy();
    }

    @PostMapping("/removemoney/{value}")
    public void removeMoney(@PathVariable("value") int value){
        gameService.removeMoney(value);
    }

    @PostMapping("/addmoney/{value}")
    public void addMoney(@PathVariable("value") int value){
        gameService.addMoney(value);
    }

    @PostMapping("/removeenergy/{value}")
    public void removeEnergy(@PathVariable("value") int value){
        gameService.removeEnergy(value);
    }

    @PostMapping("/addenergy/{value}")
    public void addEnergy(@PathVariable("value") int value){
        gameService.addEnergy(value);
    }

    @PostMapping("/addpepperspraytobackpack")
    public void addPeppersprayToBackpack(){
        gameService.addPeppersprayToBackpack();
    }

    @PostMapping("/addenergydrinktobackpack")
    public void addEnergyDrinkToBackpack(){
        gameService.addEnergyDrinkToBackpack();
    }

    @PostMapping("/addsouvenirtobackpack/{souvenirName}")
    public void addSouvenirToBackpack(@PathVariable("souvenirName") String souvenirName){
        gameService.addSouvenirToBackpack(souvenirName);
    }

    @GetMapping("/displaybackpack")
    public List<Item> displayBackpack(){
        return gameService.displayBackpack();
    }

    @PostMapping("/removeitemfrombackpack/{item}")
    public void removeItemFromBackpack(@PathVariable("item") String item){
        gameService.removeItemFromBackpack(item);
    }


    @GetMapping("/shop")
    public List<Item> displayShop(){
        return gameService.displayShop();
    }

    @GetMapping("/station")
    public List<Transportation> displayStation(){
        return gameService.displayStation();
    }

    //Temp method, Use this to populate backpack while testing http://localhost:8080/game/initiateplayer
    @PostMapping("/initiateplayer")
    public void initiatePlayerItems(){
        addEnergyDrinkToBackpack();
        addPeppersprayToBackpack();
    }
    
}
