package se.journer.journer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import se.journer.journer.service.QuestionService;

@Controller
public class AppController {

    QuestionService questionService;

    public AppController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @RequestMapping("index")
    public String start() {
        return "index";
    }
}
