package se.journer.journer.dao;

import org.springframework.stereotype.Repository;
import se.journer.journer.question.Question;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class QuestionDAO {

    static List<String> questions = new ArrayList<>();
    private static List<Question> DB =
            new ArrayList<>(List.of(
                    new Question(
                            UUID.randomUUID(),
                            "What is the capital of Assyria",
                            "Right answer", questions)));

    public List<Question> getQuestion() {
        return DB;
    }
}
