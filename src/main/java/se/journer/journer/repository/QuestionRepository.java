package se.journer.journer.repository;

import org.springframework.data.repository.CrudRepository;
import se.journer.journer.models.questions.Question;

public interface QuestionRepository extends CrudRepository<Question, Integer> {
}
