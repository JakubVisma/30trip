import React from "react";

function Day8() {
    const date = new Date().getDate();
    if(date<8){
        return(
            <h1 style={{ color: 'red' }}>Proszę nie kombinować!</h1>
        );
    }

    return (
        <div>
            <h1 style={{ color: "white", marginLeft: "5rem" }}>
                <p>Dzień 8 - Z dala od siebie (i to w dzień kobiet!)</p>
            </h1>
            <div className="m-5 pb-15">
                <p >Czasem jesteśmy z dala od siebie. W sumie to prawie codziennie, bo chodzimy do pracy. No ale czasem na dłużej.</p>
                <p >Na te trudne czasy rozłąki przygotowałem Ci prezent, tak bym zawsze mógł być koło Ciebie - i to w najseksowniejszym wydaniu. Nie było to najłatwiejsze zadanie, tak więc zwołałem najlepszych pomocników.</p>
                <p > Możesz teraz otworzyć paczkę oznaczoną "V". To też Twoja literka na dzień 8. Wszystkiego najlepszego z okazji dnia kobiet! 😘</p>      
                <div className="">

            </div>          
            </div>


        </div>
    );
}

export default Day8;