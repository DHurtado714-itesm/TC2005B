/*
  1. Una función que reciba un arreglo de números y devuelva su promedio. + 
  2. Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs. 
  3. Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución en js que se ejecute sobre node.
  4. Crea una pequeña aplicación web que al enviar una petición al servidor, devuelva una de las páginas que creaste anteriormente en tus laboratorios.


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

*/

// Modulo para crear servidores web

const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url === "/") {
    response.setHeader("Content-Type", "text/html");
    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write('<head><meta charset="utf-8"></head><body>');
    response.write("<h1>Chilaquiles</h1>");
    response.write('<a href="/ordenar">Ordena tus chilaquiles aquí</a>');
    response.end();
  } else if (request.url === "/ordenar" && request.method === "GET") {
    response.setHeader("Content-Type", "text/html");
    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write('<head><meta charset="utf-8"></head><body>');
    response.write("<h1>Chilaquiles</h1>");
    response.write('<form action="/ordenar" method="POST">');

    let radios =
      "<fieldset><legend>¿Con qué salsa quieres tus chilaquiles?</legend>";
    radios +=
      '<div><input type="radio" id="rojos" name="tipo_chilaquiles" value="rojos" checked>';
    radios += '<label for="rojos">Salsa roja</label></div>';
    radios +=
      '<div><input type="radio" id="verdes" name="tipo_chilaquiles" value="verdes">';
    radios += '<label for="verdes">Salsa verde</label></div></fieldset><br>';

    response.write(radios);

    response.write(
      '<label for="extras">¿Con qué deseas tus chilaquiles?</label>'
    );
    response.write('<input type="text" id="extras" name="extras"><br><br>');

    response.write('<input type="submit" value="Ordenar">');

    response.write("</form>");
    response.write("</body></html>");
    response.end();
  } else if (request.url === "/ordenar" && request.method === "POST") {
    const datos = [];

    request.on("data", (dato) => {
      console.log(dato);
      datos.push(dato);
    });

    return request.on("end", () => {
      const datos_completos = Buffer.concat(datos).toString();
      console.log(datos_completos);
      const tipo_chilaquiles = datos_completos.split("&")[0].split("=")[1];
      console.log(tipo_chilaquiles);
      if (tipo_chilaquiles === "rojos") {
        response.setHeader("Content-Type", "text/html");
        response.write("<!DOCTYPE html>");
        response.write("Gracias por tu orden");
        response.write(
          '<img alt="chilaquiles rojos" src="https://sazondemama.com/wp-content/uploads/2022/09/Como-hacer-la-receta-de-chilaquiles-rojos-y-cuantas-calorias-tiene-768x432.jpg">'
        );
        return response.end();
      } else {
        response.setHeader("Content-Type", "text/html");
        response.write("<!DOCTYPE html>");
        response.write("Gracias por tu orden");
        response.write(
          '<img alt="chilaquiles verdes" src="https://i.pinimg.com/736x/9a/c3/2b/9ac32b9b26902dc6708d835d6b8d0954.jpg">'
        );
        return response.end();
      }
    });
  } else {
    response.statusCode = 404;
    response.write("Lo sentimos, de esos chilaquiles no tenemos");
    response.end();
  }
});

server.listen(3000);

server.listen(3000);
