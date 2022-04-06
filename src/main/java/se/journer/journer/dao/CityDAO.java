package se.journer.journer.dao;

import org.springframework.stereotype.Repository;
import se.journer.journer.models.attraction.Attraction;
import se.journer.journer.models.cities.City;
import se.journer.journer.models.questions.Question;
import se.journer.journer.repository.CityRepository;

import java.util.List;

@Repository
public class CityDAO {

    CityRepository cityRepository;
    City currentCity;

    public CityDAO(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    public Iterable<City> getCities() {
        return cityRepository.findAll();
    }

    public void setCurrentCity(City currentCity) {
        this.currentCity = currentCity;
    }

    public City getCurrentCity() {
        return currentCity;
    }
}
