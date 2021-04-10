import { useState, useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import NotFound from '../NotFound/NotFound';
import style from './Quiz.module.css'

// Credits for the Quiz App Chris Blakely https://www.freecodecamp.org/news/how-to-build-a-quiz-app-using-react/
const Quiz = () => {

    const user = useContext(AuthContext);

    const questions = [
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
    ];


    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    if(!user) {
        return (
            <NotFound />
        )
    }

    return (
        <section className={style.quizWrapper}>

            <div className={style.quiz}>
                {showScore ? (
                    <div className={style.scoreSection}>
                        You scored {score} out of {questions.length}
                    </div>
                ) : (
                    <>
                        <div className={style.questionSection}>
                            <div className={style.questionCount}>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className={style.questionText}>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className={style.answerSection}>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button className={style.answerBtn} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default Quiz;
