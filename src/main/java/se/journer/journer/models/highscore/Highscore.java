package se.journer.journer.models.highscore;

import se.journer.journer.models.player.Player;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "highscore")
public class Highscore {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private int money;
    private int completedCities;

    public Highscore() {
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMoney() {
        return money;
    }

    public void setMoney(int money) {
        this.money = money;
    }

    public int getCompletedCities() {
        return completedCities;
    }

    public void setCompletedCities(int completedCities) {
        this.completedCities = completedCities;
    }
}
