const productosControllers=require('../controllers/productosControllers');

const express=require('express');
const router=express.Router();

router.get('/crear', productosControllers.crear)
router.get('/editar', productosControllers.editar)


module.exports=router;