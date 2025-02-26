import React from "react";

function Day10() {
    const date = new Date().getDate();
    if(date<10){
        return(
            <h1 style={{ color: 'red' }}>Proszę nie kombinować!</h1>
        );
    }

    return (
        <div>
            <h1 style={{ color: "white", marginLeft: "5rem" }}>
                <p>Dzien 10</p>
            </h1>
            <div className="m-5 pb-15">
                <p >Cześć Misiaku! Witem Cię w tym pięknym miesiącu, kiedy skończysz 30 latek. O rany ale to zleciało!</p>
                <p >Z tej okazji chiałbym zabrać Cię w podróż. Każdego dnia jedna kartka z kalendarza będzie się aktywować. Każda z nich to jakieś unikalne wspomnienie, wyzwanie, prezent albo gra. Jeżeli uda Ci się ukończyć wszystkie z nich, czeka Cię -tytyrytyty- Nagroda Główna!</p>
                <p > Mam nadzieję że te podróż sprawi Ci radość, tak jak inne nasze podróże. Wszystkiego najlepszego po raz pierwszy. Kocham Cię! </p>      
                <div className="">
            <h4 className="mt-5" style={{color: 'white'}}> Każda podróż zaczyna się od pierwszego kroku. My wykonaliśmy razem wiele pierwszych z nich. Czy pamiętasz je wszystkie?</h4>

            </div>          
            </div>


        </div>
    );
}

export default Day10;