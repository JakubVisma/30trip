import React, { useState } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

function Day4() {
    const [puzzleSolved, setPuzzleSolved] = useState(0);
    return (
        <div>
            <h1 style={{ color: "white", marginLeft: "5rem" }}>
                <p>Dzien 4 - puzzle</p>
            </h1>
            <h1 style={{ color: "white", marginLeft: "5rem" }}>Dobra mistrzu puzli, przygotuj się na wyzwanie!</h1>

            {puzzleSolved === 1 &&
                (<h1 style={{ color: "orange", marginLeft: "5rem" }}>Brawo!</h1>)
            }
            {puzzleSolved === 2 &&
                (<h1 style={{ color: "orange", marginLeft: "5rem" }}>Już prawie!</h1>)
            }
            {puzzleSolved === 3 &&
                (<h1 style={{ color: "orange", marginLeft: "5rem" }}>Twoja czwarta litera hasła to "X"!</h1>)
            }

            <div className="m-5">
                {puzzleSolved === 0 &&
                    <JigsawPuzzle imageSrc="https://github.com/JakubVisma/30trip/blob/master/src/routes/day2/screenshots/15.2.png?raw=true"
                        onSolved={() => setPuzzleSolved(1)} />}
                {puzzleSolved === 1 &&
                    <JigsawPuzzle imageSrc="https://github.com/JakubVisma/30trip/blob/master/src/routes/day2/screenshots/17.2.png?raw=true"
                        onSolved={() => setPuzzleSolved(2)} />}
                {puzzleSolved === 2 &&
                    <JigsawPuzzle imageSrc="https://github.com/JakubVisma/30trip/blob/master/src/routes/day2/screenshots/21.2.png?raw=true"
                        onSolved={() => setPuzzleSolved(3)} />}
            </div>

        </div>
    );
}

export default Day4;