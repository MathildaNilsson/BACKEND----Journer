package se.journer.journer.question;

import java.util.ArrayList;
import java.util.UUID;

public class Question {
    private UUID id;
    private String Question;
    private String correctAnswer;
    private ArrayList<String> wrongAnswer;

    public Question(UUID id, String question, String correctAnswer, ArrayList<String> wrongAnswer) {
        this.id = id;
        Question = question;
        this.correctAnswer = correctAnswer;
        this.wrongAnswer = wrongAnswer;
    }

    public UUID getId() {
        return id;
    }

    public String getQuestion() {
        return Question;
    }

    public String getCorrectAnswer() {
        return correctAnswer;
    }

    public ArrayList<String> getWrongAnswer() {
        return wrongAnswer;
    }
}
