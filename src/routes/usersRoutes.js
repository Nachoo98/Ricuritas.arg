const usersControllers=require('../controllers/usersControllers');

const express=require('express');
const router=express.Router();

router.get('/registro', usersControllers.registro)
router.get('/login', usersControllers.login)


module.exports=router;