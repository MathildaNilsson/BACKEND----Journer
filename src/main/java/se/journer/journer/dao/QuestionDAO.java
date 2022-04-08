package se.journer.journer.dao;

import org.springframework.stereotype.Repository;
import se.journer.journer.models.questions.Category;
import se.journer.journer.models.questions.Question;
import se.journer.journer.repository.CategoryRepository;
import se.journer.journer.repository.QuestionRepository;

import java.util.Optional;

@Repository
public class QuestionDAO {

    QuestionRepository repository;
    CategoryRepository categoryRepository;

    public QuestionDAO(QuestionRepository repository, CategoryRepository categoryRepository) {
        this.repository = repository;
        this.categoryRepository = categoryRepository;
    }

    public Iterable<Question> getQuestion() {
        return repository.findAll();
    }

    public Optional<Question> getQuestionByID(Integer id){
        return repository.findById(id);
    }

    public Iterable<Category> getCategory() {
        return categoryRepository.findAll();
    }
}
