import React, { useState } from "react";
import SudokuApp from '../sudoku/SudokuApp.tsx';

function Day3() {
    const date = new Date().getDate();
    if(date<3){
        return(
            <h1 style={{ color: 'red' }}>Proszę nie kombinować!</h1>
        );
    }
    return (
        <div>
            <h1 style={{ color: "white", marginLeft: "5rem" }}>
                <p>Dzień 3 - Sudoku</p>
            </h1>
            <h4 style={{ color: "white", marginLeft: "5rem" }}>Choć tym razem to nie telewizorek w samolocie, mam dla Ciebie to co tygrysy lubią najbardziej - Sudoku. Do dzieła!</h4>
            <div className="m-5 pb-15" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <SudokuApp />
            </div>
        </div>
    );
}
export default Day3;