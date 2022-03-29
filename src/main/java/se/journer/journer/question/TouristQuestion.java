package se.journer.journer.question;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class TouristQuestion extends Question {

    public TouristQuestion(Integer id, String question, String correctAnswer, List<String> wrongAnswer) {
        super(id, question, correctAnswer, wrongAnswer);
    }
}
