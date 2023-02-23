console.log("Hola mundo");
console.info("Este script se ejecuta desde la computadora del usuario")
console.warn(
  "Docuemnt, alert, confirm, prompt, no existen ene el entorno de ejecución de Node.js"
);
console.error("Error: no se pudo ejecutar el programa");

// Modulos para leer y escribir archivos

const filesystem = require("fs");
filesystem.writeFileSync("hola.txt", "Hola dede Node.js");
console.log(filesystem.readFileSync("hola.txt").toString());
