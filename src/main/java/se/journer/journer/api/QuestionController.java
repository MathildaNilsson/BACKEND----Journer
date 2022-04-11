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

    QuestionService service;

    public QuestionController(QuestionService questionService) {
        this.service = questionService;
    }

    @GetMapping("")
    public List<Question> getQuestion(){
        return service.getQuestion();
    }

    @GetMapping("/answer/{id}")
    public List<Answer> getAnswers(@PathVariable("id") Integer id){
        return service.getAnswers(id);
    }

    @GetMapping("/category/{categoryId}")
    public List<Question> getQuestionByType(@PathVariable("categoryId") Integer categoryId){
        return service.getQuestionByType(categoryId);
    }

    @GetMapping("/categoryname/{categoryName}")
    public List<Question> getQuestionByType(@PathVariable("categoryName") String categoryName){
        System.out.println("##################" + service.getQuestionByName(categoryName));
        return service.getQuestionByName(categoryName);
    }

    @GetMapping("/categoryid/{categoryName}")
    public Integer getCategoryIdByCategoryName(@PathVariable("categoryName") String categoryName){
        return service.getCategoryIdByName(categoryName);
    }

    @GetMapping("/random/{categoryId}")
    public Question getRandomQuestion(@PathVariable("categoryId") Integer id){
        return service.getRandomQuestion(id);
    }

    @GetMapping("/right/{id}")
    public Answer getRightAnswer(@PathVariable("id") int id){
        return service.getRightAnswer(id);
    }

    @GetMapping("/attractionsbycityname/{city}")
    public List<Question> getAttractionsByCityName(@PathVariable String city){
        return service.getAttractionsByCityName(city);
    }

}
