const express = require('express');
const router = express.Router();
const productosAPIController = require('../../controllers/api/productosAPIController');

//Rutas
//Listado de todos los actores
router.get('/', productosAPIController.list);
router.get('/category', productosAPIController.category);
router.get('/:id', productosAPIController.detail);



module.exports = router;