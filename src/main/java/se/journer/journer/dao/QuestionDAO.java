package se.journer.journer.dao;

import org.springframework.stereotype.Repository;
import se.journer.journer.models.Question;
import se.journer.journer.repository.QuestionRepository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class QuestionDAO {

    QuestionRepository repository;

    public QuestionDAO(QuestionRepository repository) {
        this.repository = repository;
    }

    public Iterable<Question> getQuestion() {
        return repository.findAll();
    }
}
