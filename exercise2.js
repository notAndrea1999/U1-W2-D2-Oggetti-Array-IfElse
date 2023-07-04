/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const number1 = 20;
const number2 = 10;

if (number2 > number1) {
  console.log("Number 2 is bigger then number 1.");
} else if (number2 < number1) {
  console.log("Number 1 is bigger then number 2.");
}

/* ESERCIZIO 2 =
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ex2 = 75;
if (ex2 !== 5) {
  console.log("Not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ex3 = 125;
if (ex3 % 5 === 0) {
  console.log("Divisible by 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const firstNumer = 8;
const secondNumber = 0;

if (firstNumer === 8) {
  console.log("Number value is 8");
} else if (firstNumer !== 8) {
  console.log("Error number not equal");
}
if (firstNumer - secondNumber && firstNumer + secondNumber === 8) {
  console.log("Addition and subtraction have the same result: 8 ");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart = 40;
const shippingfee = 10;
if (totalShoppingCart > 50) {
  console.log("Free Shipping!!!");
} else {
  console.log("Requirements are not met. Total ammount to pay:", totalShoppingCart + shippingfee);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let blackFridayTotalCart = (totalShoppingCart * 20) / 100;
if (blackFridayTotalCart > 50) {
  console.log("Free Shipping!!!");
} else {
  console.log(
    "Requirements are not met. Total ammount to pay:",
    totalShoppingCart - blackFridayTotalCart + shippingfee
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ex7Number1 = 12;
const ex7Number2 = 56;
const ex7Number3 = 22;
const numbers = [];
if (ex7Number1 in numbers === false) {
  numbers.push(ex7Number1);
  console.log(numbers);
}
if (ex7Number2 in numbers === false) {
  numbers.push(ex7Number2);
  console.log(numbers);
}
if (ex7Number3 in numbers === false) {
  numbers.push(ex7Number3);
  console.log(numbers);
}

console.log("SortNumbers:", numbers.sort().reverse());

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ex8 = 8;
if (typeof ex8 === "number") {
  console.log("Your variable is a number");
} else if (typeof ex8 !== "number") {
  console.log("Your variable is not a number");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ex9 = 48;
if (ex9 % 2 === 0) {
  console.log("Your number is even");
} else if (ex9 % 2 !== 0) {
  console.log("Error your number is not even");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let ex14 = [];
// ex14.unshift(1);
ex14.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(ex14);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

ex14.splice(9, 9, 100);
console.log(ex14);
