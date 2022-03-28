package se.journer.journer.question;

import java.util.ArrayList;
import java.util.UUID;

public class CityQuestion extends Question{
    public CityQuestion(UUID id, String question, String correctAnswer, ArrayList<String> wrongAnswer) {
        super(id, question, correctAnswer, wrongAnswer);
    }
}
