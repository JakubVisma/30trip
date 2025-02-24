import React, {useState} from "react";
import { quiz7 } from './day7/quiz7';
import Quiz from '../lib/Quiz'

function Day7() {
    const [quizResult, setQuizResult] = useState();

    return (
        <div>
            <h1 style={{ color: "white", marginLeft: "5rem" }}>
                Dzien 7 - rozmowa.
            </h1>
            <div className="m-5 pb-15">
                <p style={{ fontStyle: 'italic' }}>Mówić można z każdym – rozmawiać bardzo mało z kim</p>
                <p style={{ fontStyle: 'italic' }}>Feliks Chwalibóg</p>
                <p className="mt-5" style={{ color: 'white' }}>Rozmawiamy ze sobą już od wielu lat. Wymianiamy myśli i zdjęcia, chwile dobre, trudne, głupie. Czasem milczymy. Zmieniamy się i zmienia się też sposób w jaki za sobą rozmawiamy.</p>
                <p style={{ color: 'white' }}>Przygotowałem dla Ciebie mały quiz z naszego rozmawiania. Jesteś w stanie zgadnąć, który to rok?</p>
                {quizResult && quizResult.numberOfCorrectAnswers && quizResult.numberOfCorrectAnswers !== 13 && <h2 style={{ color: 'orange' }}> Spróbuj raz jeszcze</h2>}
                {quizResult && quizResult.numberOfCorrectAnswers && quizResult.numberOfCorrectAnswers === 13 && <h2 style={{ color: 'orange' }}> Piękny wynik! Twoja siódma litera to "X"</h2>}
                
            </div>
            <div className = "quizz" style={{background: '#007ea7'}}>
            <Quiz
                quiz={quiz7}
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
    );
}

export default Day7;