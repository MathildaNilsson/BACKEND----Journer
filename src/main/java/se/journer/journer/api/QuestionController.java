package se.journer.journer.api;

import org.springframework.web.bind.annotation.*;
import se.journer.journer.models.questions.Answer;
import se.journer.journer.models.questions.Question;
import se.journer.journer.service.QuestionService;

import java.util.List;

@RestController
@RequestMapping("/question")
@CrossOrigin
public class QuestionController {

    QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @GetMapping("")
    public List<Question> getQuestion(){
        return questionService.getQuestion();
    }

    @GetMapping("/answer/{id}")
    public List<Answer> getAnswers(@PathVariable("id") Integer id){
        return questionService.getAnswers(id);
    }

    @GetMapping("/category/{categoryId}")
    public List<Question> getQuestionByType(@PathVariable("categoryId") Integer categoryId){
        return questionService.getQuestionByType(categoryId);
    }

    @GetMapping("/categoryname/{categoryName}")
    public List<Question> getQuestionByType(@PathVariable("categoryName") String categoryName){
        return questionService.getQuestionByName(categoryName);
    }

    @GetMapping("/categoryid/{categoryName}")
    public Integer getCategoryIdByCategoryName(@PathVariable("categoryName") String categoryName){
        return questionService.getCategoryIdByName(categoryName);
    }

    @GetMapping("/random/{categoryId}")
    public Question getRandomQuestion(@PathVariable("categoryId") Integer id){
        return questionService.getRandomQuestion(id);
    }

    @GetMapping("/right/{id}")
    public Answer getRightAnswer(@PathVariable("id") int id){
        return questionService.getRightAnswer(id);
    }

}
