"use strict";
//Variabili utente
let nomeUtente;
let kmUtente;
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
        nomeUtente = document.getElementById('nome-utente').value;
        kmUtente = Number(document.getElementById('km-utente').value);
        prezzoTot = kmUtente * prezzoBase;

        if (etaUtente === 'minorenne'){
            prezzoTot = prezzoTot -(prezzoTot * 20 /100);
            document.getElementById("tipo-offerta").innerHTML = 'Biglietto Junior';
        } else if (etaUtente === 'over65'){
            prezzoTot = prezzoTot -(prezzoTot * 40 /100);
            document.getElementById("tipo-offerta").innerHTML = 'Biglietto Silver';
        } else{
            document.getElementById("tipo-offerta").innerHTML = 'Biglietto Standard';
        }

        document.getElementById("tot").innerHTML = prezzoTot.toFixed(2);
        document.getElementById("nome-resume").innerHTML = nomeUtente;
        document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10 + 1);
        document.getElementById("cod-cp").innerHTML = Math.floor(Math.random() * 100000);
        changeDisplay.classList.remove("no-disp");
    }
)