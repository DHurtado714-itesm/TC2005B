const express = require('express');
const router = express.Router();

const pilotosController = require('../controllers/pilotos.controller');

const hasCreate = require('../util/hasCreate');

router.get('/nuevo', hasCreate, pilotosController.get_nuevo);

router.post('/nuevo', hasCreate, pilotosController.post_nuevo);

router.get('/:id', pilotosController.listar);

router.get('/', pilotosController.listar);

module.exports = router;
