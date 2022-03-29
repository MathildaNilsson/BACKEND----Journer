package se.journer.journer.question;


import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="question")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String Question;
    private String correctAnswer;
   // private List<String> wrongAnswer;


    public Question() {
    }

    public Integer getId() {
        return id;
    }

    public String getQuestion() {
        return Question;
    }

    public String getCorrectAnswer() {
        return correctAnswer;
    }

    //public List<String> getWrongAnswer() {
    //    return wrongAnswer;
    //}
}
