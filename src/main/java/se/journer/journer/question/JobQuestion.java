package se.journer.journer.question;

import java.util.ArrayList;
import java.util.UUID;

public class JobQuestion extends Question {

    public JobQuestion(UUID id, String question, String correctAnswer, ArrayList<String> wrongAnswer) {
        super(id, question, correctAnswer, wrongAnswer);
    }
}
