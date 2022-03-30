package se.journer.journer.service;

import org.springframework.stereotype.Service;
import se.journer.journer.dao.QuestionDAO;
import se.journer.journer.models.Question;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuestionService {

    QuestionDAO questionDAO;

    public QuestionService(QuestionDAO questionDAO) {
        this.questionDAO = questionDAO;
    }

    public List<Question> getQuestion() {
        return (List<Question>) questionDAO.getQuestion();
    }

    public List<Question> getQuestionByType(String type){
        return getQuestion().stream()
                .filter(Question -> type.equalsIgnoreCase(Question.getType()))
                .collect(Collectors.toList());
    }

}
