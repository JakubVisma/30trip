import React, {useState} from "react";

function Day3() {

      const [quizResult, setQuizResult] = useState();

    return (
        <div>
            <h1 style={{ color: "white", marginLeft: "5rem" }}>
                Dzien 3 - Wesołe jest życie UX-a.
            </h1>
            <h4 className="mt-3" style={{ color: "white", marginLeft: "5rem" }}>
                <p>Hejho. Mam nadzieję że jesteś silna, zwarta i gotowa. Dziś będziemy testować Twoje umiejętności UXowa - a jest co testować! Ready or not, zaczynamy!</p>
            </h4>
            <div className="mt-3" style={{ height: '490px' }} >
                <iframe scrolling="no" style={{ width: '100%', height: '100%' }} src="https://cantunsee.space/"></iframe>
            </div>
        </div>
    );
}
export default Day3;