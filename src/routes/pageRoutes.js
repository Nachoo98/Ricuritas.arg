const pageControllers=require('../controllers/pageControllers');
const usersControllers=require('../controllers/usersControllers');

const express=require('express');
const router=express.Router();

router.get('/home', pageControllers.home)
router.get('/', pageControllers.home)
router.get('/carrito', pageControllers.carrito)
router.get('/nosotros', pageControllers.nosotros)
router.get('/paraLlevar', pageControllers.paraLlevar)

module.exports=router;