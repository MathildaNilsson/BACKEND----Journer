package se.journer.journer.api;

import org.springframework.web.bind.annotation.*;
import se.journer.journer.models.highscore.Highscore;
import se.journer.journer.service.HighscoreService;

import java.util.List;

@RestController
@RequestMapping("/highscore")
@CrossOrigin
public class HighscoreController {

    HighscoreService service;

    public HighscoreController(HighscoreService service) {
        this.service = service;
    }

    @GetMapping("")
    public List<Highscore> getHighscore(){
        return service.getHighscore();
    }

    @PostMapping
    public Highscore addHighscore(@RequestBody Highscore highscore) {
        return service.addHighscore(highscore);
    }

}
