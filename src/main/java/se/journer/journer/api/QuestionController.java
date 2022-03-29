package se.journer.journer.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import se.journer.journer.models.Question;
import se.journer.journer.service.QuestionService;

import java.util.List;

@RestController
@RequestMapping("")
public class QuestionController {

    QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @GetMapping("")
    public List<Question> getQuestion(){

        return questionService.getQuestion();
    }

}
