package se.journer.journer.question;

import java.util.ArrayList;
import java.util.UUID;

public class TouristQuestion extends Question {

    public TouristQuestion(UUID id, String question, String correctAnswer, ArrayList<String> wrongAnswer) {
        super(id, question, correctAnswer, wrongAnswer);
    }
}
