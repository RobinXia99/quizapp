import { createRef, Fragment, useState } from "react";

const Game = (props) => {


    const questions = getQuestions();

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showAnimation, setShowAnimation] = useState(true);


    let question = questions[currentQuestion];

    let optionContainerRef = createRef();

    const submitAnswer = (selectedAnswer) => {

        
        if(selectedAnswer == question.correctAnswer) {
            props.answeredCorrectly();
        }

        if(currentQuestion + 1 <= questions.length -1) {
            setCurrentQuestion(currentQuestion + 1);
            setShowAnimation(!showAnimation);
        } else {
            props.answeredCorrectly();
            props.showResult();
        }
        
    }

    return (
        <Fragment>
            <h1 className="large-text">{question.question}</h1>
            <div className={'option-container ' + (showAnimation ? 'rightToLeft' : 'leftToRight')} ref={optionContainerRef}>
                <article className="option" onClick={ () => submitAnswer(question.answers[0]) }>{question.answers[0]}</article>
                <article className="option" onClick={ () => submitAnswer(question.answers[1]) }>{question.answers[1]}</article>
                <article className="option" onClick={ () => submitAnswer(question.answers[2]) }>{question.answers[2]}</article>
                <article className="option" onClick={ () => submitAnswer(question.answers[3]) }>{question.answers[3]}</article>
            </div>
        </Fragment>
    )
}

function getQuestions() {
    return [

        {
            question: "What is the boiling point of water?",
            answers: ["100°C","1000°C","200°C","125°C"],
            correctAnswer: "100°C"
        },
        {
            question: "What is the capital city of India?",
            answers: ["Sri Lanka","Mumbai","Bangladesh","New Delhi"],
            correctAnswer: "New Delhi"
        },
        {
            question: "From what region does Ash Ketchum come from?",
            answers: ["Johto","Kanto","Sinnoh","Galar"],
            correctAnswer: "Kanto"
        },
        {
            question: "Which planet is second closest to our Sun?",
            answers: ["Mercury","Mars","Earth","Venus"],
            correctAnswer: "Venus"
        },
        {
            question: "Where was the Olympic Games hosted in 2016?",
            answers: ["London","Beijing","Rio","Tokyo"],
            correctAnswer: "Rio"
        },
        {
            question: "Who painted 'Starry Nights'? ",
            answers: ["Leonard DaVinci","Vincent Van Gogh","Pablo Picasso","Paul Cezanne"],
            correctAnswer: "Vincent Van Gogh"
        },
        {
            question: "What is the atomic symbol of Silver?",
            answers: ["Sr","Si","Ag","Au"],
            correctAnswer: "Ag"
        },
        {
            question: "Who is Harry Potters first friend?",
            answers: ["Hermione Granger","Ron Weasley","Dudley Dursley","Hagrid"],
            correctAnswer: "Ron Weasley"
        },


    ];
}

export default Game;