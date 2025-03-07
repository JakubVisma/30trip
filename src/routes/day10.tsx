import React from "react";
import qr1 from './day10/qr1.png';

function Day10() {
    const date = new Date().getDate();
    if (date < 10) {
        return (
            <h1 style={{ color: 'red' }}>Proszę nie kombinować!</h1>
        );
    }

    return (
        <div>
            <h1 style={{ color: "white", marginLeft: "5rem" }}>
                <p>Dzień 10 - W nieznane!</p>
            </h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                <img style={{ width: '50%' }} src={qr1} className="mt-5" />
                <p> </p>
            </div>


        </div>
    );
}

export default Day10;