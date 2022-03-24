const usersControllers=require('../controllers/usersControllers');



const express=require('express');
const router=express.Router();

//agregue para usar el multer------------------------------
const multer=require('multer');
const path=require('path');
const validations=require('../middlewares/validateRegisterMiddleware');

const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/imag'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName = Date.now() + path.extname(file.originalname);   // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
});

const uploadFile = multer({ storage: multerDiskStorage });
//--------------------------------------------------------

router.get('/registro', usersControllers.registro)
router.post('/registrado',uploadFile.single('imagenUsuario'), validations, usersControllers.registrado)
/*
Formulario de registro
router.get('/register', guestMiddleware, usersController.register);

Procesar el registro
router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister);
*/

router.get('/login', usersControllers.login)
router.post('/logins',usersControllers.logeando)
router.get('/perfil',usersControllers.perfil)

module.exports=router;