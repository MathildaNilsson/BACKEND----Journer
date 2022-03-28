package se.journer.journer.api;

import se.journer.journer.question.Question;
import se.journer.journer.service.QuestionService;

import java.util.List;

public class QuestionController {

    QuestionService questionService;

    public QuestionController() {
    }

    public List<Question> getQuestion(){

        return questionService.getQuestion();
    }

}
