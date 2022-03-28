package se.journer.journer.service;

import se.journer.journer.dao.QuestionDAO;
import se.journer.journer.question.Question;

import java.util.List;


public class QuestionService {

    QuestionDAO questionDAO;

    public QuestionService() {
    }

    public List<Question> getQuestion() {
        return questionDAO.getQuestion();
    }
}
