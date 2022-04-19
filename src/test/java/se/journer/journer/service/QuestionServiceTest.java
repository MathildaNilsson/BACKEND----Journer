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
import java.util.stream.Collectors;

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
        testCategory.setId(1);
        testCategory.setCategory("category");
        List<Answer> listOfAnswers = new ArrayList<>();
        Answer answerOne = new Answer();
        answerOne.setRightAnswer(true);
        Answer answerTwo = new Answer();
        answerTwo.setRightAnswer(false);
        Answer answerThree = new Answer();
        answerThree.setRightAnswer(false);
        listOfAnswers.add(answerOne);
        listOfAnswers.add(answerTwo);
        listOfAnswers.add(answerThree);
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
        Question actualQuestion = unitUnderTest.getQuestionById(1);
        // VERIFY
        assertEquals(1,actualQuestion.getId());
        Mockito.verify(questionDAO, Mockito.times(1)).getQuestionByID(1);
    }

    @Test
    void getAnswers() {

        // SET UP
        Mockito.when(questionDAO.getQuestionByID(1)).thenReturn(Optional.of(listOfQuestions.get(0)));
        // TEST
        List<Answer> actualListOfAnswers = unitUnderTest.getQuestionById(1).getAnswerList();
        // VERIFY
        assertEquals(3,actualListOfAnswers.size());
        Mockito.verify(questionDAO, Mockito.times(1)).getQuestionByID(1);
    }

    @Test
    void getRandomQuestion() {
        // SET UP
        Mockito.when(questionDAO.getQuestion()).thenReturn(listOfQuestions);
        // TEST
        List<Question> actualQuestionList = unitUnderTest.getQuestion().stream()
                .filter(question -> question.getCategoryId().equals(1))
                .collect(Collectors.toList());
        Optional<Question> actualQuestion = unitUnderTest.getQuestionByType(1).stream()
                .skip((int) (actualQuestionList.size() * Math.random())).findAny();
        // VERIFY
        assertEquals(1,actualQuestion.orElse(null).getCategoryId());
    }

    @Test
    void getQuestionByType() {
        // SET UP
        Mockito.when(questionDAO.getQuestion()).thenReturn(listOfQuestions);
        // TEST
        List<Question> actualQuestionList = unitUnderTest.getQuestion().stream()
                .filter(question -> question.getCategoryId().equals(1))
                .collect(Collectors.toList());
        // VERIFY
        assertEquals(1,actualQuestionList.size());
        Mockito.verify(questionDAO, Mockito.times(1)).getQuestion();
    }

    @Test
    void getQuestionByName() {
        // SET UP
        Mockito.when(questionDAO.getQuestion()).thenReturn(listOfQuestions);
        // TEST
        List<Question> actualQuestionList = unitUnderTest.getQuestion().stream()
                .filter(question -> question.getCategoryName().equalsIgnoreCase("category"))
                .collect(Collectors.toList());
        // VERIFY
        assertEquals(1,actualQuestionList.size());
    }

    @Test
    void getRightAnswer() {
        // SET UP
        Mockito.when(questionDAO.getQuestionByID(1)).thenReturn(Optional.of(listOfQuestions.get(0)));
        // TEST
        Optional<Answer> actualAnswer = unitUnderTest.getQuestionById(1).getAnswerList().stream()
                .filter(answers -> answers.isRightAnswer()).findAny();
        // VERIFY
        assertTrue(actualAnswer.orElse(null).isRightAnswer());
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