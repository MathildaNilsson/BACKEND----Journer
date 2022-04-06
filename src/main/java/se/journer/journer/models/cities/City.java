package se.journer.journer.models.cities;

import se.journer.journer.models.attraction.Attraction;

import javax.persistence.*;
import java.util.List;
import java.util.Optional;

@Entity
@Table(name = "cities")
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String souvenir;
    private String cityInfo;
    //shop
    //attraction(LIST)
    //Souvenir
    //hotel
    //transport
    //questions

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "city_id", referencedColumnName = "id")
    List<Attraction> attractionList;

    public City() {
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCityInfo() {
        return cityInfo;
    }

    public String getSouvenir() {
        return souvenir;
    }

    public List<Attraction> getAttractionList() {
        return attractionList;
    }
}
