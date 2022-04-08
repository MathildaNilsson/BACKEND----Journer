package se.journer.journer.service;

import org.springframework.stereotype.Service;
import se.journer.journer.dao.QuestionDAO;
import se.journer.journer.models.questions.Answer;
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

    public List<Category> getCategory() {
        return (List<Category>) questionDAO.getCategory();
    }

    public Question getQuestionById(Integer id) {
        Optional<Question> maybeQuestion = questionDAO.getQuestionByID(id);
        return maybeQuestion.orElse(null);
    }

    public List<Answer> getAnswers(Integer id) {
        return getQuestionById(id).getAnswerList();
    }

    public Question getRandomQuestion(Integer id) {
        Optional<Question> randomQuestion = getQuestionByType(id).stream()
                .skip((int) (getQuestionByType(id).size() * Math.random())).findAny();
        return randomQuestion.orElse(null);
    }

    public List<Question> getQuestionByType(Integer categoryId) {
        List<Question> questions = (List<Question>) questionDAO.getQuestion();
        return questions.stream()
                .filter(question -> question.getCategoryId().equals(categoryId))
                .collect(Collectors.toList());
    }

    public List<Question> getQuestionByName(String categoryName) {
        List<Question> questions = (List<Question>) questionDAO.getQuestion();
        return questions.stream()
                .filter(question -> question.getCategoryName().equalsIgnoreCase(categoryName))
                .collect(Collectors.toList());
    }

    public Answer getRightAnswer(int id) {
        Optional<Answer> rightAnswer = getAnswers(id).stream()
                .filter(answers -> answers.isRightAnswer()).findAny();
        return rightAnswer.orElse(null);
    }

    public Integer getCategoryIdByName(String categoryName) {
        Category cat = getCategory()
                .stream().filter(category -> categoryName.equalsIgnoreCase(category.getCategory()))
                .findAny().orElse(null);
        assert cat != null;
        return cat.getId();
    }

}
