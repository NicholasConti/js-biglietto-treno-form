"use strict";
//Variabil utente
const nomeUtente = document.getElementById('nome-utente').value;
const kmUtente = Number(document.getElementById('km-utente').value);
const etaUtente = (document.getElementById('eta-utente').value);

// Variabile prezzo
const prezzoBase = Number(0.21);
let prezzoTot = kmUtente * prezzoBase;

// Event listener
const confermaUtente = document.getElementById('conferma');


confermaUtente.addEventListener('click',
    function() {
        if (etaUtente ===  'minorenne'){
            prezzoTot = prezzoTot -(prezzoTot * 20 /100);
        } else if (etaUtente === 'over65'){
            prezzoTot = prezzoTot -(prezzoTot * 40 /100);
        }
        document.getElementById("demo").innerHTML = prezzoTot;
    }
)