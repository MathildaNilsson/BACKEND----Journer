package se.journer.journer.models.attraction;

import javax.persistence.*;

@Entity
@Table(name = "attraction")
public class Attraction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    public Attraction() {
    }
}
