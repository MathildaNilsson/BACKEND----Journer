package se.journer.journer.repository;

import org.springframework.data.repository.CrudRepository;
import se.journer.journer.models.cities.City;

public interface CityRepository extends CrudRepository<City, Integer> {
}
