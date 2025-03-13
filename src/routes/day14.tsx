import React, { useState } from "react";
import finale from "./day14/finale.mp4"
import { Button, CircularProgress, TextField } from "@mui/material";

function Day14() {
    const [passwordAttempts, setPasswordAttempts] = useState(0);
    const [password, setPassword] = useState('');
    const [showVideo, setShowVideo] = useState(false);
    const [showLoading, setShowLoading] = useState(true);
    const date = new Date().getDate();
    if (date < 14) {
        return (
            <h1 style={{ color: 'red' }}>Proszę nie kombinować!</h1>
        );
    }


function checkPassword(){
    setPasswordAttempts(passwordAttempts+1);
    setPassword('');
    if(passwordAttempts>1)
    {
        setTimeout(function() {
            setShowLoading(false);
            setShowVideo(true);
       }, 8000);
    }
}


    return (
        <div>
            <h1 style={{ color: "white", marginLeft: "5rem" }}>
                <p>Dzień 14 - Grande Finale</p>
            </h1>
            <div className="m-5 pb-15">

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                    {passwordAttempts==0 ?  <p >Mam nadzieję że pilnowałaś literek. Wpisz hasło i sprawdźmy co się stanie</p> : <p  style={{ color: `rgb(250, 0, 0)`}} >Problem. Spróbuj jeszcze raz!</p>}
                    <div style={{ backgroundColor: `rgb(46,46,46)`, width:'150px', borderRadius:'5px' }}>
                        
                    <TextField
                        id="outlined-basic"
                        label="Hasło"
                        variant="standard"
                        color="info"
                        value={password}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setPassword(event.target.value) }} />
                    
                        </div>
                        <Button onClick={checkPassword}> Sprawdź hasło.</Button>
                    {passwordAttempts > 2 &&
                        <>
                            {showLoading && <CircularProgress />}
                            {showVideo && < video src={finale} width="600" height="300" controls="controls" />}
                            <p style={{ color: `rgb(212, 142, 12)`}}>Wygląda na to że mamy problem. Nawiązuję połączenie z konsultantem.</p>
                            <h5 className="mt-5" style={{ color: 'white' }}> Twój prezent główny to bilet na koncert mumfordów. Gratulacje! </h5>
                            <h5 className="mt-5" style={{ color: 'white' }}> To by było na tyle. Mam nadzieję że dobrze się bawiłaś przez ostatnie 14 dni, a dzień dzisiejszy będzie wisienką na torcie. Buziaki :* </h5>
                            <h5 style={{ color: 'grey' }}>Twój Mąż ❤️</h5>
                        </>}

                </div>

            </div>

        </div >
    );
}

export default Day14;