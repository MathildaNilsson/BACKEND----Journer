package se.journer.journer.api;

import org.springframework.web.bind.annotation.*;
import se.journer.journer.models.items.Item;
import se.journer.journer.models.items.Pepperspray;
import se.journer.journer.models.player.Player;
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

    @GetMapping("/displaybackpack")
    public List<Item> displayBackpack(){
        return gameService.displayBackpack();
    }
    
}
