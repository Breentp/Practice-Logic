//* User profile
/**
 * Escriba un programa que solicite al usuario sus datos: nombre de usuario, edad y una lista de sus películas favoritas. Almacene la información y luego muéstrela en la consola. Tenga en cuenta que el resultado de las películas debe agregar un pequeño mensaje como: 'La película {película} es una de mis favoritas'.
 */
/**let userNam = prompt ("Enter your user name: ");
let years = prompt ("Enter your age: ");
let favMovies = [];

for (i = 0; i <=2; i++) {
    let mov = prompt ("Enter your top 3 favorite movies: (Press next)");
    favMovies.push(mov);
}

let random = Math.floor(Math.random() * favMovies.length);
let randomMov = favMovies[random];
    
console.log(`Your user name is ${userNam}`);
console.log(`Your age is ${years}`);
console.log(`${randomMov} is one of my favorite movies.`);


//////////////////////////////////////////////////////

//* Highest numberb
/**
 * Escribe un programa que solicite 10 números. Usando operadores lógicos y cualquier otra función/estructura de JavaScript que haya visto antes, determine y genere el mayor de esos números.
 */
/**
const numbersList = [];

for (i = 0; i <= 9; i++) {
    numberL = prompt ("Enter a number: ");
    numbersList.push(numberL);
}

var numberMax = Math.max(...numbersList)
console.log("The maximum number is: " + numberMax);

//////////////////////////////////////////////////////

//* Alarm
/**
 * Escribe un programa que pregunte a un usuario la cantidad de segundos necesarios hasta que se ejecute una alarma (mensaje) junto con un texto para mostrar una vez que hayan pasado esos segundos en tiempo real.
 */
/**
var seconds = prompt ("Set the seconds to alarm: ");
var miliSeconds = seconds * 1000;

setTimeout(() => {
    console.log(`Time for bed after ${seconds} seconds`)
}, miliSeconds);

////////////////////////////////////////////////////


//* Palindrome
/**
 * Escriba un programa que solicite una palabra u oración (puede estar en mayúscula, tener espacios y puntuación). Averigua si la oración/palabra es un palíndromo o no. Ignorando la puntuación, los espacios y las letras mayúsculas.
 */

let word = prompt ("Enter a word o phrase: ")

function palindrome () {
    const inverseWord = word.split("").reverse().join("");
    if (word === inverseWord) {
      console.log("This is a palindrome.");
    } else {
      console.log("This is not a palindrome.");
    }
  }
  
  console.log(palindrome(word));

/////////////////////////////////////////////////////


//* Factorial
/**
 * Escriba un programa que solicite un número entero n. Donde 1 <= n. Resuelve esto usando recursividad.
 */
/** 
let interNum = prompt ("Set a integer number: ");

 function factorial(n) {
    if (n > 1) {
        return n * factorial(n - 1);
    } else if (n === 1) {
        return 1;
    } else {
        console.log("Only enter positive numbers.")
    }
 }
 console.log(factorial(interNum));


//* Flat array
/**
 * Escriba un programa que tome la siguiente matriz anidada y la aplane (convirtiéndola en una matriz 1D). Utilice cualquier tipo de algoritmo que desee, como devoluciones de llamada, recursividad, etc.
 */
/**
let multiDimension = [1, [2, [3, [4, 5, [6]]]]]; */