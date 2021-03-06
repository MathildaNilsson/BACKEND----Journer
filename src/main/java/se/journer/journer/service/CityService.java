package se.journer.journer.service;

import org.springframework.stereotype.Service;
import se.journer.journer.dao.CityDAO;
import se.journer.journer.models.attraction.Attraction;
import se.journer.journer.models.cities.City;
import se.journer.journer.models.questions.Question;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CityService {

    CityDAO cityDAO;

    public CityService(CityDAO cityDAO) {
        this.cityDAO = cityDAO;
    }

    public List<City> getCities() {
        return (List<City>) cityDAO.getCities();
    }

    public City getCityByName(String name) {
        Optional<City> cityByName = getCities().stream()
                .filter(city -> city.getName().equalsIgnoreCase(name))
                .findAny();
        return cityByName.orElse(null);
    }

    public void setCurrentCity(City currentCity) {
        cityDAO.setCurrentCity(currentCity);
    }

    public City getCurrentCity() {
        return cityDAO.getCurrentCity();
    }

    public List<City> getRandomCities() {
        List<City> cities = (List<City>) cityDAO.getCities();
        Collections.shuffle(cities);
        List<City> shuffledCities = cities.subList(0,3);
        return shuffledCities;
    }

    public City getRandomCity() {
        Optional<City> randomQuestion = getCities().stream()
                .skip((int) (getCities().size() * Math.random())).findAny();
        return randomQuestion.orElse(null);
    }
}
