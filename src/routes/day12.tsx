import React from "react";

function Day12() {
    const date = new Date().getDate();
    if(date<12){
        return(
            <h1 style={{ color: 'red' }}>Proszę nie kombinować!</h1>
        );
    }

    return (
        <div>
            <h1 style={{ color: "white", marginLeft: "5rem" }}>
                <p>Dzien 12 - </p>
            </h1>
       
            </div>


    );
}

export default Day12;