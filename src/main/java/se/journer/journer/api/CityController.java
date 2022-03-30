package se.journer.journer.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import se.journer.journer.models.cities.City;
import se.journer.journer.service.CityService;

import java.util.List;

@RestController
@RequestMapping("/city")
public class CityController {

    CityService cityService;

    public CityController(CityService cityService) {
        this.cityService = cityService;
    }

    @GetMapping("")
    public List<City> getCities(){
        return cityService.getCities();
    }
}
