const pageControllers=require('../controllers/pageControllers');
const usersControllers=require('../controllers/usersControllers');

const express=require('express');
const router=express.Router();

router.get('/home', pageControllers.home)
router.get('/carrito', pageControllers.carrito)
router.get('/producto', pageControllers.producto)


module.exports=router;