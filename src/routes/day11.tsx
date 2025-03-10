import { TextField } from "@mui/material";
import React, { useRef, useState } from "react";

function Day11() {
    const [puzzleSolved, setPuzzleSolved] = useState('');
    const gridIframe = useRef(null);
    const date = new Date().getDate();
    if(date<11){
        return(
            <h1 style={{ color: 'red' }}>Proszę nie kombinować!</h1>
        );
    }

    return (
        <div>
            <h1 style={{ color: "white", marginLeft: "5rem" }}>
            Dzień 11 - wesołe jest życie UX-a.
            </h1>
            <h4 className="mt-3" style={{ color: "white", marginLeft: "5rem" }}>
                <p>Hejho. Mam nadzieję że jesteś silna, zwarta i gotowa. Dziś będziemy testować Twoje umiejętności UXowa - a jest co testować! Ready or not, zaczynamy!</p>
            </h4>
            <div style={{ color: "white", marginLeft: "5rem"  }}>
                <p>Po zakończeniu, wpisz wynik poniżej </p>
                <div style={{ backgroundColor: `rgb(46,46,46)`, width:'100px', borderRadius:'5px' }}>
                    <TextField
                        id="outlined-basic"
                        label="Wynik"
                        variant="filled"
                        color="info"

                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setPuzzleSolved(event.target.value) }} />
                        
                </div>
                {puzzleSolved.length > 3 && <p>Twoja literka na dziś to "C"</p>}
            </div>

            <div className="mt-3" style={{ height: '490px' }} >
                <iframe ref={gridIframe} style={{ width: '100%', height: '100%' }} src="https://cantunsee.space/"></iframe>
            </div>
        </div>
    );
}

export default Day11;