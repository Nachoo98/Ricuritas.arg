const usersControllers=require('../controllers/usersControllers');



const express=require('express');
const router=express.Router();

//agregue para usar el multer------------------------------
const multer=require('multer');
const path=require('path');
const validations=require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
/*const authMiddleware = require('../middlewares/authMiddleware');*/


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

router.get('/registro', guestMiddleware, usersControllers.registro)
router.post('/registrado',uploadFile.single('imagen'),/* validations,*/ usersControllers.registrado)
router.get('/login',guestMiddleware, usersControllers.login)
router.post('/logins',usersControllers.logeando)
router.get('/perfil',usersControllers.perfil)

router.get('/logout', usersControllers.logout)

router.get('/check',usersControllers.check)

module.exports=router;