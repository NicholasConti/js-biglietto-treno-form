STEPS:
MILESTONE 1  
1. Inserisco nel file html gli input e i bottoni
2. Creo una variabile nomeUtente che prendera il valore dell' input text
3. Creo una variabile kmUtente che prendera il valore dell' input number
4. Creo una variabile etaUtente che prendera il valore dell' input select
5. Creo una variabile prezzo moltiplicando i km x 0.21
6. AL CLICK DEL BOTTONE CONFERMA
   SE l' utente ha selezionato il valore Minorenne
     prezzo = prezzo - (prezzo * 20 /100)
   ALTRIMENTI SE l' utente ha selezionato il valore Over 65
      prezzo = prezzo - (prezzo * 40 /100)
   ALTRIMENTI
   il prezzo da pagare sara pieno e senza sconto
7. stampare il prezzo ottenuto con solo 2 decimali utilizzando toFixed(2)



MILESTONE 2 
1. Creo struttura pagina html/css visibile
2. Creo parte html/css non visibile
3. Modifico l'evento della milesone 1 
    AL CLICK DI CONFERMA
    - la parte invisibile compare
    - Nella colonna  Nome Passeggero compare il nome dell' utente
    - Sotto Offerta
        SE e minorenne 
        stampo a schermo Biglietto junior
        SE e over
        stampo  a schermo Biglietto silver
        se e Maggiorenne
        stampo biglietto standard
    -Sotto Codice CP genero un numero random
    -Sotto Costo biglietto stampo il prezzo ottenuto nella milestone 1
4. Al click di Annulla
    - La parte del TUOBIGLIETTO torna non visibile
5. Sistemo font bottoni  e agggiungo effetti
