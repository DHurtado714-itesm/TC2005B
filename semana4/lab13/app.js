const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");

const app = express();

app.use(
  session({
    secret: "Messi el mejor de la historia",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

const rutasUsuarios = require("./routes/usuarios.routes");
app.use("/usuarios", rutasUsuarios);

const rutasPilotos = require("./routes/pilotos.routes");
app.use("/pilotos", rutasPilotos);

app.use((request, response, next) => {
  response.status(404);

  //Envía la respuesta al cliente
  response.send("Lo sentimos, esta ruta no existe");
});

app.listen(3000);

/*
Preguntas a responder:

1. ¿Qué beneficios encuentras en el estilo MVC?

El estilo MVC permite separar la lógica de la aplicación en tres capas: 
Modelo, Vista y Controlador. Esto permite que cada capa tenga una responsabilidad 
específica y que sea más fácil de mantener y de extender.

2. ¿Encuentras alguna desventaja en el estilo arquitectónico MVC?

El estilo MVC puede ser más complejo de implementar que otros estilos de
arquitectura de software. Además, puede ser más difícil de entender para
desarrolladores que no están familiarizados con el estilo MVC.

*/
