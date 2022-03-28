package se.journer.journer.service;

import org.springframework.stereotype.Service;
import se.journer.journer.dao.QuestionDAO;
import se.journer.journer.question.Question;

import java.util.List;

@Service
public class QuestionService {

    QuestionDAO questionDAO;

    public QuestionService(QuestionDAO questionDAO) {
        this.questionDAO = questionDAO;
    }

    public List<Question> getQuestion() {
        return questionDAO.getQuestion();
    }
}
