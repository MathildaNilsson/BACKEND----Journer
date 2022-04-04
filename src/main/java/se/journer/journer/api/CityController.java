package se.journer.journer.api;

import org.springframework.web.bind.annotation.*;
import se.journer.journer.models.cities.City;
import se.journer.journer.service.CityService;

import java.util.List;

@RestController
@RequestMapping("/city")
@CrossOrigin
public class CityController {

    CityService cityService;

    public CityController(CityService cityService) {
        this.cityService = cityService;
    }

    @GetMapping("")
    public List<City> getCities(){
        return cityService.getCities();
    }

    @GetMapping("/{name}")
    public City getCityByName(@PathVariable("name") String name){
        return cityService.getCityByName(name);
    }

    @PostMapping("/setcurrentcity/{city}")
    public void setCurrentCity(@PathVariable("city") String city){
        City currentCity =  getCityByName(city);
        cityService.setCurrentCity(currentCity);
    }

    @GetMapping("/getcurrentcity")
    public City getCurrentCity(){
        return cityService.getCurrentCity();
    }

}
