package se.journer.journer.models;

import javax.persistence.*;

@Entity
@Table(name="wrong_answers")
public class WrongAnswers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String answer;

    public WrongAnswers() {
    }

    public Integer getId() {
        return id;
    }

    public String getAnswer() {
        return answer;
    }

}
