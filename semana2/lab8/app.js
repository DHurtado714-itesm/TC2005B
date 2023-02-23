console.log("Hola mundo");
console.info("Este script se ejecuta desde la computadora del usuario");
console.warn(
  "Docuemnt, alert, confirm, prompt, no existen ene el entorno de ejecución de Node.js"
);
console.error("Error: no se pudo ejecutar el programa");

// Modulos para leer y escribir archivos

const filesystem = require("fs");
filesystem.writeFileSync("hola.txt", "Hola desde Node.js");
console.log(filesystem.readFileSync("hola.txt").toString());

// const arreglo = [
//   1, 2, 3, 4, 5, 10, 50, 100, 200, 500, 1000, 2, 3, 10000, 50000,
// ];

// for (let item of arreglo) {
//   setTimeout(() => {
//     console.log(item);
//   }, item);
// }

/*
  1. Una función que reciba un arreglo de números y devuelva su promedio. + 
  2. Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs. 
  3. Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución en js que se ejecute sobre node.
  4. Crea una pequeña aplicación web que al enviar una petición al servidor, devuelva una de las páginas que creaste anteriormente en tus laboratorios.
*/

// Promedio de un arreglo

function ArrayAvg(myArray) {
  var i = 0,
    summ = 0,
    ArrayLen = myArray.length;
  while (i < ArrayLen) {
    summ = summ + myArray[i++];
  }
  return summ / ArrayLen;
}
var myArray = [10, 20, 30, 50, 60];
var a = ArrayAvg(myArray);
console.log(a);

// Escribir un string en un archivo de texto
function strToText(str) {
  const filesystem = require("fs");
  filesystem.writeFileSync("test.txt", str);
}
strToText("Hola desde Node.js");

// Problema traducido a JS

function toFindDuplicates() {
  let arry = [1, 2, 1, 3, 4, 3, 5];
  let resultToReturn = false;
  // call some function with callback function as argument
  resultToReturn = arry.some((element, index) => {
    return arry.indexOf(element) !== index;
  });
  if (resultToReturn) {
    console.log("Duplicate elements exist");
  } else {
    console.log("Duplicates dont exist ");
  }
}
toFindDuplicates();

// Crear una pequeña aplicación web

const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);
  response.setHeader("Content-Type", "text/html");
  response.write(filesystem.readFileSync("index.html").toString());
  response.end();
});

server.listen(3000);


// Modulo para crear servidores web

// const http = require("http");

// const server = http.createServer((request, response) => {
//   console.log(request.url);
//   response.setHeader("Content-Type", "text/html");
//   response.write("Hola desde node!");
//   response.write("<h1>Test</h1>");
//   response.end();
// });

// server.listen(3000);
