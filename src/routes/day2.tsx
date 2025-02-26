import React, {useState} from "react";
import { quiz2 } from './day2/quiz2';
import Quiz from '../lib/Quiz'

function Day2() {

    const [quizResult, setQuizResult] = useState();

    const date = new Date().getDate();
    if(date<2){
        return(
            <h1 style={{ color: 'red' }}>Proszę nie kombinować!</h1>
        );
    }
    return (
        <div>
            <h1 style={{ color: "white", marginLeft: "5rem" }}>
                Dzien 2 - Przygody.
            </h1>
            <div className="m-5 pb-15">
                <p style={{ fontStyle: 'italic' }}>If it scares you, it might be a good thing to try.</p>
                <p style={{ fontStyle: 'italic' }}>Seth Godin</p>
                <p className="mt-5" style={{ color: 'white' }}>Cześć i czołem! Dziś porozmawiamy o różnych przygodach jakie miały miejsce w życiu najdzielniejszego karzełka w całej Danii i Polsce ❤🤍💙💚💛</p>
                <p style={{ color: 'white' }}>Wy, młodzi bardzo lubicie używać emotek. Dlatego przygody Twojego życia zapisałem pismem obrazkowym. Spróbuj zgadnąć historię zanim popatrzysz na odpowiedzi - będzie ciekawiej. Do boju i rozszyfruj je wszystkie!</p>
                {quizResult && quizResult.numberOfCorrectAnswers && quizResult.numberOfCorrectAnswers !== 10 && <h2 style={{ color: 'orange' }}> Spróbuj raz jeszcze</h2>}
                {quizResult && quizResult.numberOfCorrectAnswers && quizResult.numberOfCorrectAnswers === 10 && <h2 style={{ color: 'orange' }}> Klasunia! Twoja druga litera to "T". Podaj ją dziś panu mężowi, a czeka Cię niespodziewanka!</h2>}
                
            </div>
            <div className = "quizz" style={{background: '#007ea7'}}>
            <Quiz
                quiz={quiz2}
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