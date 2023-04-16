const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const csrf = require("csurf");
const isAuth = require('./util/is-auth');
// const multer = require('multer'); // Para subir archivos

const app = express();

app.use(
  session({
    secret: "Messi el mejor de la historia",
    cookie: { maxAge: 600000 },
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

const csrfProtection = csrf();
app.use(csrfProtection);
app.use((request, response, next) => {
  response.locals.csrfToken = request.csrfToken();
  next();
});

const rutasUsuarios = require("./routes/usuarios.routes");
app.use("/usuarios", rutasUsuarios);

const rutasPilotos = require("./routes/pilotos.routes");
app.use("/pilotos", isAuth, rutasPilotos);

// const rutasEscuderias = require("./routes/escuderias.routes");
// app.use("/escuderias", isAuth, rutasEscuderias);

app.use((request, response, next) => {
  response.status(404);

  //Envía la respuesta al cliente
  response.send("Lo sentimos, esta ruta no existe");
});

app.listen(3000);
