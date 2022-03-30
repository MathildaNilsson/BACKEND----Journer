package se.journer.journer.models.questions;


import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="question")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String question;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "question_id", referencedColumnName = "id")
    List<Answers> answerList;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="category_id", referencedColumnName = "id")
    private Category categoryId;

    public Question() {
    }

    public Integer getId() {
        return id;
    }

    public String getQuestion() {
        return question;
    }

    public List<Answers> getAnswerList() {
        return answerList;
    }
}