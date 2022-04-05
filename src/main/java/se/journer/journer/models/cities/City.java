package se.journer.journer.models.cities;

import javax.persistence.*;

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
}
