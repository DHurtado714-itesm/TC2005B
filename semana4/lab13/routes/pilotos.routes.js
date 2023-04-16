const express = require("express");
const router = express.Router();

const pilotosController = require("../controllers/pilotos.controller");

const hasCreate = require("../util/hasCreate");

router.get("/nuevo", pilotosController.get_nuevo);

router.post("/nuevo", pilotosController.post_nuevo);

router.get("/:id", pilotosController.listar);

router.get('/buscar/:valor_busqueda', pilotosController.buscar);

router.get("/", pilotosController.listar);

module.exports = router;
