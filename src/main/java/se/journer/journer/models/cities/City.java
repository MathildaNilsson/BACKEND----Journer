package se.journer.journer.models.cities;

import javax.persistence.*;

@Entity
@Table(name="cities")
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
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
}
