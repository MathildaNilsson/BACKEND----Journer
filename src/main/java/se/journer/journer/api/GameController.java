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

    @GetMapping("/getplayer/{name}")
    public Player getPlayer(@PathVariable ("name") String name){
        return gameService.getPlayer(name);
    }
}
