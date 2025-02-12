import React, {useState} from "react";
import { quiz2 } from './day2/quiz2';
import Quiz from '../lib/Quiz'

function Day2() {

      const [quizResult, setQuizResult] = useState();

    return (
        <div>
            <h1 style={{ color: "white", marginLeft: "5rem" }}>
                Dzien 2 - rozmowa.
            </h1>
            <div className="m-5 pb-15">
                <p style={{ fontStyle: 'italic' }}>Mówić można z każdym – rozmawiać bardzo mało z kim</p>
                <p style={{ fontStyle: 'italic' }}>Feliks Chwalibóg</p>
                <p className="mt-5" style={{ color: 'white' }}>Rozmawiamy ze sobą już od wielu lat. Wymianiamy myśli i zdjęcia, chwile dobre, trudne, głupie. Czasem milczymy. Zmieniamy się i zmienia się też sposób w jaki za sobą rozmawiamy.</p>
                <p style={{ color: 'white' }}>Przygotowałem dla Ciebie mały quiz z naszego rozmawiania. Jesteś w stanie zgadnąć, który to rok?</p>
                {quizResult && quizResult.numberOfCorrectAnswers && quizResult.numberOfCorrectAnswers !== 1 && <h2 style={{ color: 'orange' }}> Spróbuj raz jeszcze</h2>}
                {quizResult && quizResult.numberOfCorrectAnswers && quizResult.numberOfCorrectAnswers === 1 && <h2 style={{ color: 'orange' }}> Piękny wynik! Twoja druga litera to "X"</h2>}
                
            </div>
            <div className = "quizz" style={{background: '#007ea7'}}>
            <Quiz
                quiz={quiz2}
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
export default Day2;