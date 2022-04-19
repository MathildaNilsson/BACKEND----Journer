package se.journer.journer.models.questions;

import javax.persistence.*;

@Entity
@Table(name="answers")
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String answer;
    private boolean rightAnswer;

    public Answer() {
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

    public void setId(Integer id) {
        this.id = id;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public void setRightAnswer(boolean rightAnswer) {
        this.rightAnswer = rightAnswer;
    }
}
