package se.journer.journer.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import se.journer.journer.models.player.Player;
import se.journer.journer.service.GameService;

@RestController
@RequestMapping("/game")
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
