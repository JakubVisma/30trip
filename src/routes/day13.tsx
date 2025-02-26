import React from "react";

function Day13() {
    const date = new Date().getDate();
    if(date<13){
        return(
            <h1 style={{ color: 'red' }}>Proszę nie kombinować!</h1>
        );
    }

    return (
        <div>
            <h1 style={{ color: "white", marginLeft: "5rem" }}>
            <p>Dzien 13 - Życzenia</p>
            </h1>
            <div className="m-5 pb-15">
                <p >Dzień dobry! Już coraz bliżej urodzin. Rany julek, to już jutro!</p>
                <p >No więc co jest najważniejsze w dniu urodzin? Tort jest spoko. Prezenty też. Ale chyba najważniejsi są ludzie - kto by chciał świętować urodziny samemu?</p>
                <p >No a jak goście to i życzenia. Jestem pewien że jutro i pojutrze dostaniesz multum ciepłych słów od wielu osób. Pozwolę sobie troche oszukać, i złożyć Ci życzenia jako pierwszy, zanim utoną w powodzi innych życzeń - i w ten sposób dostajesz życzenia przez 3 dni, czy to nie super?</p>
                <p >Chciałem Ci życzyć żebyśmy zawsze była szczera sama ze sobą. Żebyś dalej walczyła o to co uważasz za słuszne. Żebyś była pełna radości i życia. Żebyś spełniała się, zwodowo, sportowo, prywatnie. Żebyśmy się razem zestarzeli, szczęśliwi i zakochani.  </p>      
                <p >Żebyś latała pod niebo na kajcie i zaliczała wszystkie czarne trasy. Żeby żadne puzle i krzyżówki nie dały Ci rady. Żebyś dalej była otoczona ludźmi którzy Cię kochają i których Ty kochasz.  </p>      
                <p >No i fajnej pracy i żebyśmy sobie zrobili super mieszkanko. I żeby Ci się śniły same fajne rzeczy. Żeby awkoado zawsze było w punkt dojrzałe. Wszystkich achievmentów na Stravie.  </p>    
                <p >Spełniania marzeń, pieniędzy i podróży, bo czemu by nie.  </p>  
                <p >Super męża już masz, więc na tym polu życzę tylko stabilności. </p>  
                <p >I żebyś dalej była taką super ciocią dla wszystkich dzieci. </p>  
                <p >50 przeczytanych książek każdego roku. Chyba że akurat nie. Samych odkryć kulinarnych w Thermomixie.  </p>  
                <p >Pozycji managerskiej, jeżeli zdecydujesz że tego chcesz. </p>  
                <p >Fajnych ciuszków i dużych sprzedaży na Vinted.</p>
                <p >Tańcz jakby nikt nie patrzył. Bądź sobą, bo jesteś super. Kocham Cię.</p>    
                <p >Dzisiejsza literka to "Q", jak "Qrcze zaraz będę miała 30 lat". Powiedz ją panu mążowi, może coś z tym zrobi?   </p>  
                <div className="">
            </div>          
            </div>


        </div>
    );
}

export default Day13;