// Un array es una estructura de datos, es un objeto tipo lista de alto nivel.

// Los arrays son objetos de tipo lista cuyo prototipo tiene métodos para realizar operaciones de recorrido y mutación

var frutas = []; // Array Literal Syntax 

var frutas = ["Manzana", "Platano", "Cereza", "Fresa"]; 
console.log(frutas); 
console.log(frutas.length); // length es una propiedad del array

// Acceder (por índice) a un elemento del Array
console.log(frutas[0]);   // Los arrays iician en "0" 


// === Metodos para mutar arrays ===


// .push();
 var masFrutas = frutas.push("Uvas"); // Esté metodo añadirá "Uvas" añ final del array
 console.log(frutas);

// .pop();
 var utlimo = frutas.pop("Uvas"); // Eliminará "Uvas" del final 
 console.log(frutas);

// unshift()
var nuevaLogitud = frutas.unshift("Uvas"); // Añade "Uvas" al inicio 
console.log(frutas);

// shift()
var borrarFruta = frutas.shift("Manzana"); // Elimina "Manzana" del inico
console.log(frutas);

// .indexOf();
var posicion = frutas.indexOf("Platano"); // te dará la posición de ese item en el array
console.log(frutas);


/*El método “map()” permite aplicar una función a cada elemento 
del array y devolver un nuevo array con los valores modificados. Por ejemplo:*/
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(function(numero) {
  return numero * numero;
});
console.log(cuadrados); // [1, 4, 9, 16, 25]


// El método “reduce()” permite combinar todos los elementos del array en un solo valor. Por ejemplo:
const suma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
  }, 0);
  console.log(suma); // 15