package se.journer.journer.service;

import org.springframework.stereotype.Service;
import se.journer.journer.dao.QuestionDAO;
import se.journer.journer.models.questions.Answers;
import se.journer.journer.models.questions.Category;
import se.journer.journer.models.questions.Question;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class QuestionService {

    QuestionDAO questionDAO;

    public QuestionService(QuestionDAO questionDAO) {
        this.questionDAO = questionDAO;
    }

    public List<Question> getQuestion() {
        return (List<Question>) questionDAO.getQuestion();
    }

    public Question getQuestionById(Integer id){
        Optional<Question> maybeQuestion = questionDAO.getQuestionByID(id);
        return maybeQuestion.orElse(null);
    }

    public List<Answers> getAnswers(Integer id) {
        return getQuestionById(id).getAnswerList();
    }

    public Question getRandomQuestion(Integer id){
        Optional<Question> randomQuestion = getQuestionByType(id).stream()
                .skip((int) (getQuestionByType(id).size() * Math.random())).findAny();
        return randomQuestion.orElse(null);
    }

    public List<Question> getQuestionByType(Integer categoryId) {
        List <Question> questions = (List<Question>) questionDAO.getQuestion();
        return questions.stream()
                .filter(question -> question.getCategoryId().equals(categoryId))
                .collect(Collectors.toList());
    }
}
