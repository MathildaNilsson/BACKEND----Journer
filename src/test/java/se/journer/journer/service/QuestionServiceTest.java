package se.journer.journer.service;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import se.journer.journer.dao.QuestionDAO;
import se.journer.journer.models.questions.Answer;
import se.journer.journer.models.questions.Category;
import se.journer.journer.models.questions.Question;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

class QuestionServiceTest extends MockitoExtension {

    private static QuestionService unitUnderTest;
    private static QuestionDAO questionDAO;
    private static List<Question> listOfQuestions;

    @BeforeAll
    public static void init(){
        questionDAO = Mockito.mock(QuestionDAO.class);
        unitUnderTest = new QuestionService(questionDAO);
        listOfQuestions = new ArrayList<>();
        initQuestion();
    }

    public static void initQuestion(){
        Question testQuestion = new Question();
        Category testCategory = new Category();
        List<Answer> listOfAnswers = new ArrayList<>();
        testQuestion.setId(1);
        testQuestion.setQuestion("Test fråga?");
        testQuestion.setAnswerList(listOfAnswers);
        testQuestion.setCategoryId(testCategory);
        listOfQuestions.add(testQuestion);
    }

    @Test
    void getQuestion() {
        // SET UP

        Mockito.when(questionDAO.getQuestion()).thenReturn(listOfQuestions);

        // TEST
        List<Question> actualQuestions = unitUnderTest.getQuestion();

        // VERIFY

        assertEquals(1,actualQuestions.size());
    }

    @Test
    void getCategory() {
        // SET UP
        List<Category> listOfCategories = new ArrayList<>();
        Category testCategory = new Category();
        listOfCategories.add(testCategory);

        Mockito.when(questionDAO.getCategory()).thenReturn(listOfCategories);

        // TEST
        List<Category> actualCategories = unitUnderTest.getCategory();

        // VERIFY
        assertEquals(1, actualCategories.size());
    }

    @Test
    void getQuestionById() {
        // SET UP
        Mockito.when(questionDAO.getQuestionByID(1)).thenReturn(Optional.of(listOfQuestions.get(0)));

        // VERIFY

        Mockito.verify(questionDAO, Mockito.times(1)).getQuestionByID(1);
    }

    @Test
    void getAnswers() {
        // SET UP

        // TEST

        // VERIFY
    }

    @Test
    void getRandomQuestion() {
        // SET UP

        // TEST

        // VERIFY
    }

    @Test
    void getQuestionByType() {
        // SET UP

        // TEST

        // VERIFY
    }

    @Test
    void getQuestionByName() {
        // SET UP

        // TEST

        // VERIFY
    }

    @Test
    void getRightAnswer() {
        // SET UP

        // TEST

        // VERIFY
    }

    @Test
    void getCategoryIdByName() {
        // SET UP

        // TEST

        // VERIFY
    }

    @Test
    void getAttractionsByCityName() {
        // SET UP

        // TEST

        // VERIFY
    }
}