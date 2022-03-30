package se.journer.journer.service;

import org.springframework.stereotype.Service;
import se.journer.journer.dao.CityDAO;
import se.journer.journer.models.cities.City;

import java.util.List;

@Service
public class CityService {

    CityDAO cityDAO;

    public CityService(CityDAO cityDAO) {
        this.cityDAO = cityDAO;
    }

    public List<City> getCities() {
        return (List<City>) cityDAO.getCities();
    }
}
