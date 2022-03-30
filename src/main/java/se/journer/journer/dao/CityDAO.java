package se.journer.journer.dao;

import org.springframework.stereotype.Repository;
import se.journer.journer.models.cities.City;
import se.journer.journer.models.questions.Question;
import se.journer.journer.repository.CityRepository;

@Repository
public class CityDAO {

    CityRepository cityRepository;

    public CityDAO(CityRepository cityRepository) {
        this.cityRepository = cityRepository;
    }

    public Iterable<City> getCities() {
        return cityRepository.findAll();
    }
}
