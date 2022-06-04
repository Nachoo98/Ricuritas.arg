const productosControllers=require('../controllers/productosControllers');


const express=require('express');
const router=express.Router();
const adminMiddleware = require('../middlewares/adminMiddleware');
//agregue para usar el multer------------------------------
const multer=require('multer');
const path=require('path');


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

router.get('/', productosControllers.index)
router.get('/listadoEditar', adminMiddleware,productosControllers.indexEditar)
router.get('/crear', adminMiddleware, productosControllers.crear)
router.post('/creado',uploadFile.single('imagenProducto'),productosControllers.creado)
router.get('/detail/:id', productosControllers.detail)
router.get('/editar/:id', adminMiddleware,productosControllers.editar)
router.put('/editar/:id', productosControllers.editado)
router.delete('/editar/:id', productosControllers.destroy)
router.get('/test',productosControllers.test)



module.exports=router;