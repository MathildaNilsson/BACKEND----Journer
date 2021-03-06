package se.journer.journer.api;

import org.springframework.web.bind.annotation.*;
import se.journer.journer.models.attraction.Attraction;
import se.journer.journer.models.cities.City;
import se.journer.journer.service.CityService;

import java.util.List;

@RestController
@RequestMapping("/city")
@CrossOrigin
public class CityController {

    CityService cityService;
    int i = 0;

    public CityController(CityService cityService) {
        this.cityService = cityService;
    }

    @GetMapping("")
    public List<City> getCities(){
        return cityService.getCities();
    }

    @GetMapping("/random/cities")
    public List<City> getRandomCities(){
        return cityService.getRandomCities();
    }

    @GetMapping("/random/city")
    public City getRandomCity(){
        return cityService.getRandomCity();
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
