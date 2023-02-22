"use strict";
//Variabili utente
const nomeUtente = document.getElementById('nome-utente').value;
const kmUtente = Number(document.getElementById('km-utente').value);
let etaUtente;

// Variabili prezzo
const prezzoBase = Number(0.21);
let prezzoTot = kmUtente * prezzoBase;

// Event listener
const confermaUtente = document.getElementById('conferma');


confermaUtente.addEventListener('click',
    function() {
        etaUtente = (document.getElementById('eta-utente').value);
        prezzoTot = kmUtente * prezzoBase;
        if (etaUtente === 'minorenne'){
            prezzoTot = prezzoTot -(prezzoTot * 20 /100);
        } else if (etaUtente === 'over65'){
            prezzoTot = prezzoTot -(prezzoTot * 40 /100);
        }
        document.getElementById("demo").innerHTML = prezzoTot.toFixed(2);
    }
)