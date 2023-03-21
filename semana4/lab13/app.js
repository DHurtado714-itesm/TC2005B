const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const csrf = require("csurf");
const csrfProtection = csrf();

const app = express();

app.use(csrfProtection);
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

const rutasUsuarios = require("./routes/usuarios.routes");
app.use("/usuarios", rutasUsuarios);

const rutasPilotos = require("./routes/pilotos.routes");
const csurf = require("csurf");
app.use("/pilotos", rutasPilotos);

app.use((request, response, next) => {
  response.status(404);

  //Envía la respuesta al cliente
  response.send("Lo sentimos, esta ruta no existe");
});

app.listen(3000);
