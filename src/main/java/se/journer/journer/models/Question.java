package se.journer.journer.models;


import javax.persistence.*;

@Entity
@Table(name="question")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String type;
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


    public void setId(Integer id) {
        this.id = id;
    }

    public void setQuestion(String question) {
        Question = question;
    }

    public void setCorrectAnswer(String correctAnswer) {
        this.correctAnswer = correctAnswer;
    }
}
