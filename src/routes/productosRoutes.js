const productosControllers=require('../controllers/productosControllers');

const express=require('express');
const router=express.Router();

router.get('/', productosControllers.index)
router.get('/crear', productosControllers.crear)
router.post('/creado',productosControllers.creado)
router.get('/detail/:id', productosControllers.detail)
router.get('/editar/:id', productosControllers.editar)
router.put('/editar/:id', productosControllers.editado)
router.delete('/editar/:id', productosControllers.destroy)



module.exports=router;