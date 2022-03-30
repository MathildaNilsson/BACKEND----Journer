package se.journer.journer.api;

import org.springframework.web.bind.annotation.*;
import se.journer.journer.models.questions.Answers;
import se.journer.journer.models.questions.Question;
import se.journer.journer.service.QuestionService;

import java.util.List;

@RestController
@RequestMapping("/question")
public class QuestionController {

    QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @GetMapping("")
    public List<Question> getQuestion(){
        return questionService.getQuestion();
    }

    @GetMapping("/test/{id}")
    public List<Answers> getAnswers(@PathVariable("id") Integer id){

        return questionService.getAnswers(id);
        }
}
