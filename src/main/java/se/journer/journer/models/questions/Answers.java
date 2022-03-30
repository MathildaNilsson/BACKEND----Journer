package se.journer.journer.models.questions;

import javax.persistence.*;

@Entity
@Table(name="answers")
public class Answers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String answer;
    private boolean rightAnswer;

    public Answers() {
    }

    public Integer getId() {
        return id;
    }

    public String getAnswer() {
        return answer;
    }

    public boolean isRightAnswer() {
        return rightAnswer;
    }
}
