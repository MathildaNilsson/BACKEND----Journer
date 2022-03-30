package se.journer.journer.dao;

import org.springframework.stereotype.Repository;
import se.journer.journer.models.questions.Question;
import se.journer.journer.repository.QuestionRepository;

import java.util.Optional;

@Repository
public class QuestionDAO {

    QuestionRepository repository;

    public QuestionDAO(QuestionRepository repository) {
        this.repository = repository;
    }

    public Iterable<Question> getQuestion() {
        return repository.findAll();
    }

    public Optional<Question> getQuestionByID(Integer id){
        return repository.findById(id);
    }
}
