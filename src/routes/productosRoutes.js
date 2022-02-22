const productosControllers=require('../controllers/productosControllers');

const express=require('express');
const router=express.Router();

router.get('/', productosControllers.index)
router.get('/crear', productosControllers.crear)
router.get('/detail/:id', productosControllers.detail)
router.get('/editar', productosControllers.editar)


module.exports=router;