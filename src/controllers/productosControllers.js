const fs=require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname,'../data/productos.json');


const productosControllers={
    index:(req,res)=>{

        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('listado-productos',{productos:products});
    },
    crear:(req,res)=>{
        res.render('products/creacion_producto');
    },
    editar:(req,res)=>{
        res.render('products/edicion_producto');
    },
    detail:(req,res)=>{
        res.render('products/producto');
    },

}

module.exports=productosControllers;