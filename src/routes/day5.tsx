import React, { useState } from "react";
import { quiz5 } from './day5/quiz5.js';
import Quiz from '../lib/Quiz'

function Day5() {
    const [quizResult, setQuizResult] = useState();
    const date = new Date().getDate();
    if(date<5){
        return(
            <h1 style={{ color: 'red' }}>Proszę nie kombinować!</h1>
        );
    }
    return (
        <div>
            <h1 style={{ color: "white", marginLeft: "5rem" }}>
            Dzień 5 - Czy wiesz za co Cię kocham?
            </h1>
            <div className="m-5 pb-15">
                <p style={{ fontStyle: 'italic' }}>Kocham Cię!</p>
                <p style={{ fontStyle: 'italic' }}>Jakub Brzosko</p>
                <p className="mt-5" style={{ color: 'white' }}>Cześć. Wiem że musiałaś czekać długą chwilę żeby to usłyszeć. Dlatego dziś chciałem choć w małym stopniu nadrobić za te wszystkie lata.</p>
                {quizResult && quizResult.numberOfCorrectAnswers && quizResult.numberOfCorrectAnswers !== 10 && <h2 style={{ color: 'orange' }}> Spróbuj raz jeszcze</h2>}
                {quizResult && quizResult.numberOfCorrectAnswers && quizResult.numberOfCorrectAnswers === 10 && <h2 style={{ color: 'orange' }}> Za wszystkie przyszłe powody dla których będę Cie kochał dostajesz ode mnie literkę "S"</h2>}
                
            </div>
            <div className = "quizz" style={{background: '#007ea7'}}>
            <Quiz
                quiz={quiz5}
                shuffle
                shuffleAnswer
                showInstantFeedback
                continueTillCorrect
                onComplete={setQuizResult}
                onQuestionSubmit={(obj) => console.log('user question results:', obj)}
                disableSynopsis = {false}
                allowPauseTimer
                enableProgressBar
                
            />
            </div>

        </div>
    )
}

export default Day5;