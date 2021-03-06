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
    List<Answer> answerList;

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

    public List<Answer> getAnswerList() {
        return answerList;
    }

    public Integer getCategoryId(){
        return categoryId.getId();
    }

    public String getCategoryName(){
        return categoryId.getCategory();
    }

    public String getSubCategory(){
        return categoryId.getSubCategory();
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public void setAnswerList(List<Answer> answerList) {
        this.answerList = answerList;
    }

    public void setCategoryId(Category categoryId) {
        this.categoryId = categoryId;
    }


}