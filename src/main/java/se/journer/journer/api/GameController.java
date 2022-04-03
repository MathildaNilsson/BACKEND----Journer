package se.journer.journer.api;

import org.springframework.web.bind.annotation.*;
import se.journer.journer.models.player.Player;
import se.journer.journer.service.GameService;

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

    @PostMapping("/removemoney/{value}")
    public void removeMoney(@PathVariable("value") int value){
        gameService.removeMoney(value);
    }

    @PostMapping("/addmoney/{value}")
    public void addMoney(@PathVariable("value") int value){
        gameService.addMoney(value);
    }
    
}
