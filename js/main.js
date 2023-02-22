"use strict";
//Variabili utente
let nomeUtente = document.getElementById('nome-utente').value;
let kmUtente = Number(document.getElementById('km-utente').value);
let etaUtente;

// Variabili prezzo
const prezzoBase = Number(0.21);
let prezzoTot = kmUtente * prezzoBase;

// Event listener
const confermaUtente = document.getElementById('conferma');
let changeDisplay = document.getElementById('disp-no');
confermaUtente.addEventListener('click',
    function() {
        etaUtente = (document.getElementById('eta-utente').value);
        prezzoTot = kmUtente * prezzoBase;

        if (etaUtente === 'minorenne'){
            prezzoTot = prezzoTot -(prezzoTot * 20 /100);
        } else if (etaUtente === 'over65'){
            prezzoTot = prezzoTot -(prezzoTot * 40 /100);
        }

        document.getElementById("tot").innerHTML = prezzoTot.toFixed(2);
        changeDisplay.classList.remove("no-disp");
    }
)