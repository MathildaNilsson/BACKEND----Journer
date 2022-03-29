package se.journer.journer.dao;

import org.springframework.stereotype.Repository;
import se.journer.journer.models.Question;

import java.util.ArrayList;
import java.util.List;

@Repository
public class QuestionDAO {

    static List<String> questions = new ArrayList<>();
    private static List<Question> DB =
            new ArrayList<>(List.of(
                    new Question(
                            )));

    public List<Question> getQuestion() {
        return DB;
    }
}
