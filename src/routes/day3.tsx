import React, { useState } from "react";
import SudokuApp from '../sudoku/SudokuApp.tsx';

function Day3() {
    return (
        <div>
        <h1 style={{ color: "white", marginLeft: "5rem" }}>
            <p>Dzien 3 - Sudoku</p>
        </h1>
        <h4 style={{ color: "white", marginLeft: "5rem" }}>Choć tym razem to nie telewizorek w samolocie, mam dla Ciebie to co tygrysy lubią najbardziej - Sudoku. Do dzieła!</h4>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <SudokuApp />

        </div>
        </div>

    );
}
export default Day3;