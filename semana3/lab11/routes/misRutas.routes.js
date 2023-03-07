const { response } = require("express");
const express = require("express");
const router = express.Router();

app.get("/home", (req, res, next) => {
  let html = 
  
  
  response.send(html);
});

app.get("/about", (req, res, next) => {
  let html = `<h1>Hola soy Daniel</h1>`
  
  
  response.send(html);
});

app.get("/instagram", (req, res, next) => {
  let html = `<h1><a href = https://www.instagram.com/danielhurtado714/>Mi Instagram</a></h1>
  <form action="/misRutas/home/instagram" method="POST">
  <label for="usuario">Tu usuario de Intagram:</label>
  <input type="text" name="usuario" id="usuario">
  <input type="submit" value="Enviar">
  </form>
  `;
  response.send(html);
});

app.get("/email", (req, res, next) => {
  let html = `<h1><a href = "mailto: a01707774@tec.mx>Mi email</a></h1>`;

  response.send(html);
});

app.get("/github", (req, res, next) => {
  let html = `<h1><a href = https://github.com/DHurtado714-itesm>Mi Github</a></h1>`;

  response.send(html);
});

app.get("/instagram", (req, res, next) => {
  console.log(request.body);
  console.log(request.body.usuario);
  response.send("El usuario es: " + request.body.usuario);
});
