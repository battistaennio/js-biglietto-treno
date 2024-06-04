/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/

let risultato;

//chiedo età
let userAge = parseInt(prompt("Inserisci la tua età"));
console.log("età: ", userAge);

//chiedo numero chilometri da percorrere
let userKM = parseInt(prompt("Inserisci i km da percorrere"));
console.log("km: ", userKM);

//moltiplico userKM a 0.21
const prezzoKM = userKM * 0.21;
console.log("€: ", prezzoKM);


//se età è utente è <= a 17 sottraggo prezzoKM al 20%
if (userAge <= 17) {  
    risultato = prezzoKM - (prezzoKM * 0.2);
} else if (userAge >= 65) {  	//altrimenti se età è utente è >= a 65 sottraggo prezzoKM al 40%
    risultato = prezzoKM - (prezzoKM * 0.4);  
} else {   //altimenti il risultato è uguale al prezzo al km
    risultato = prezzoKM;
}

//approssimo il risultato alla seconda cifra decimale
console.log("prezzo finale: ", risultato.toFixed(2));

//comunico prezzo finale