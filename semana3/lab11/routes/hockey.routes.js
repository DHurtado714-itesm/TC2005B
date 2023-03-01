const express = require('express');

const router = express.Router();

app.get("/nuevo", (request, response, next) => {
  let html = `
  <form action="/hockey/nuevo" method="POST">
  <label for="jugador">Nommbre del judador:</label>
  <input type="text" name="jugador" id="jugador">
  <input type="submit" value="Enviar">
  </form>
  `;
  response.send(html);
});

app.post("/nuevo", (request, response, next) => {
  console.log(request.body);
  console.log(request.body.jugador);
  response.send("El jugador es: " + request.body.jugador);
});

module.exports = router;