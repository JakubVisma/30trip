import React from "react";
import SudokuApp from '../sudokuHard/SudokuApp.tsx';

function Day9() {
    const date = new Date().getDate();
    if (date < 9) {
        return (
            <h1 style={{ color: 'red' }}>Proszę nie kombinować!</h1>
        );
    }
    return (
        <div>
            <h1 style={{ color: "white", marginLeft: "5rem" }}>
                <p>Dzień 9 - Sudoku v2.0</p>
            </h1>
            <h4 style={{ color: "white", marginLeft: "5rem" }}>No dobra, wyglda na to że nie doceniłem Cię za pierwszym razem. Czas na drugą rundę.
            </h4>
            <div className="m-5 pb-15" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <SudokuApp />
            </div>
        </div>
    );
}

export default Day9;