console.log("Hola mundo");
console.info("Este script se ejecuta desde la computadora del usuario");
console.warn(
  "Docuemnt, alert, confirm, prompt, no existen ene el entorno de ejecución de Node.js"
);
console.error("Error: no se pudo ejecutar el programa");

// Modulos para leer y escribir archivos

const filesystem = require("fs");
filesystem.writeFileSync("hola.txt", "Hola dede Node.js");
console.log(filesystem.readFileSync("hola.txt").toString());

const arreglo = [
  1, 2, 3, 4, 5, 10, 50, 100, 200, 500, 1000, 2, 3, 10000, 50000,
];

for (let item of arreglo) {
  setTimeout(() => {
    console.log(item);
  }, item);
}

// Modulo para crear servidores web

const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);
  // response.setHeader('Content')
});

server.listen(3000);
