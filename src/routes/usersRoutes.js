const usersControllers=require('../controllers/usersControllers');


const express=require('express');
const router=express.Router();

//agregue para usar el multer------------------------------
const multer=require('multer');
const path=require('path');
const validatorLogin=require('../middlewares/loginMiddleware');

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
router.post('/registrado',uploadFile.single('imagenUsuario'), usersControllers.registrado)
router.get('/login', usersControllers.login)
router.post('/logins',usersControllers.logeando)

module.exports=router;