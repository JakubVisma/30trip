import React, { useState } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

function Day4() {
    const [puzzleSolved, setPuzzleSolved] = useState(0);
    const date = new Date().getDate();
    if(date<4){
        return(
            <h1 style={{ color: 'red' }}>Proszę nie kombinować!</h1>
        );
    }

    return (
        <div>
            <h1 style={{ color: "white", marginLeft: "5rem" }}>
                <p>Dzień 4 - Puzzle</p>
            </h1>
            <h1 style={{ color: "white", marginLeft: "5rem" }}>Dobra mistrzu puzli, przygotuj się na wyzwanie!</h1>

            {puzzleSolved === 1 &&
                (<h1 style={{ color: "orange", marginLeft: "5rem" }}>Brawo!</h1>)
            }
            {puzzleSolved === 2 &&
                (<h1 style={{ color: "orange", marginLeft: "5rem" }}>Już prawie!</h1>)
            }
            {puzzleSolved === 3 &&
                (<h1 style={{ color: "orange", marginLeft: "5rem" }}>Twoja czwarta litera hasła to "O"! Na pewno da się ją wymienić na coś fajnego 🤸‍♀️🤸‍♀️</h1>)
            }

            <div className="m-5">
                {puzzleSolved === 0 &&
                    <JigsawPuzzle imageSrc="https://github.com/JakubVisma/30trip/blob/master/src/routes/day4/1.jpg?raw=true"
                        onSolved={() => setPuzzleSolved(1)} />}
                {puzzleSolved === 1 &&
                    <JigsawPuzzle columns={4} rows={4} imageSrc="https://github.com/JakubVisma/30trip/blob/master/src/routes/day4/2.jpg?raw=true"
                        onSolved={() => setPuzzleSolved(2)} />}
                {puzzleSolved === 2 &&
                    <JigsawPuzzle columns={5} rows={5} imageSrc="https://github.com/JakubVisma/30trip/blob/master/src/routes/day4/3.jpg?raw=true"
                        onSolved={() => setPuzzleSolved(3)} />}
            </div>

        </div>
    );
}

export default Day4;