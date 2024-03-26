// INPUT
const age = prompt("Quanti anni hai?"); // sting | null
// appare quanti anni hai
console.log( age, typeof age);
// stampa eta e tipo
age = parseInt(age); // number

const numberskm = prompt("Numero kilometri?"); // sting | null
// appare numero chilometri
console.log( numberskm, typeof numberskm);
// stampa numerokm e tipo
numberskm = parseInt(numberskm)

const conversione= 21 / (100);
// costante prezzo prezzo al km
console.log( conversione, typeof conversione);

// variabile prezzi e prezzi scontati
let prezzo = numberskm * conversione;
let prezzo20 = prezzo * (80/100)  
let prezzo40 = prezzo * (60/100)
// condizioni di funzionamento
// aggiunta di tofixed2 per ridurre a due e indicare i centesimi
if (age < 18){
console.log( prezzo20.toFixed(2), typeof prezzo20); 
document.getElementById("prezzofinale").innerHTML = prezzo20.toFixed(2);
}
else if (age>=18&& age<65){
console.log( prezzo.toFixed(2), typeof prezzo); 
document.getElementById("prezzofinale").innerHTML = prezzo.toFixed(2);

}
else {
console.log( prezzo40.toFixed(2), typeof prezzo40); 
document.getElementById("prezzofinale").innerHTML = prezzo40.toFixed(2);
}
// fine condizioni








