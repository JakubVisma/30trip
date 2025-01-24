import React, {useState} from "react";

function Day3() {

      const [quizResult, setQuizResult] = useState();

    return (
        <div>
            <h1 style={{ color: "white", marginLeft: "5rem" }}>
                Dzien 3 - jak w filmie.
            </h1>
            <div className="m-5 pb-15">
                <p style={{ fontStyle: 'italic' }}>Mówić można z każdym – rozmawiać bardzo mało z kim</p>
                <p style={{ fontStyle: 'italic' }}>Feliks Chwalibóg</p>
                <p className="mt-5" style={{ color: 'white' }}>Obejrzeliśmy razem wiele filmów, w szczególności bajek. Czy pamiętasz je </p>
            </div>


        </div>
    );
}
export default Day3;