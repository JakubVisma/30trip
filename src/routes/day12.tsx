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
                <p>Dzień 12 - tak po prostu</p>
            </h1>
            <div className="m-5 pb-15">
                <p >Dzisiaj tak po prostu dostaniesz prezent. Czasem można wolmo.</p>
                <p >Jak śpię to mnie obudź. A jak nie śpię to chodź i daj mi buziaka. A literka to "C".</p>      

            </div>   
       
        </div>


    );
}

export default Day12;