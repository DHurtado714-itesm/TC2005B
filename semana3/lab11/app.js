const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const pilotosRutas = require("./routes/pilotos.routes");

app.use("/pilotos", pilotosRutas);
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware
app.use((request, response, next) => {
  console.log("Middleware 1");
  next(); // Le permite a la petición continuar su camino
});

app.use((request, response, next) => {
  console.log("Middleware 2");
  // response.send("Hola Mundo"); // Manda la respuesta
  next(); // Manda la respuesta
});

app.use("/hola", (request, response, next) => {
  response.send("Hola desde la ruta /hola");
});


app.use((request, response, next) => {
  console.log("Middleware 3");
  response.status(404).send("No se encontró la ruta");
  //response.send("Hola desde el tercer middleware");
  // next(); // Le permite a la petición continuar su camino
});

app.use('/pilotos', (request, response, next) => {
  console.log(request.body);
  response.send('Respuesta de la ruta "/pilotos"'); 
});

app.listen(3000);
