package se.journer.journer.models;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="questions")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String type;
    private String question;
    private String correctAnswer;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "question", referencedColumnName = "id")
    private List<WrongAnswers> wrongAnswersList;

    public Question() {
    }

    public Integer getId() {
        return id;
    }

    public String getQuestion() {
        return question;
    }

    public String getCorrectAnswer() {
        return correctAnswer;
    }

    public String getType() {
        return type;
    }

    public List<WrongAnswers> getWrongAnswersList() {
        return wrongAnswersList;
    }

}
