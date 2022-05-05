const fs=require('fs');
const path = require('path');

const db = require('../../database/models');


const productosControllers={
    index:(req,res)=>{

        db.Producto.findAll().then((productos)=>{
            res.render('products/listado-productos',{productos:productos});
        })

    },
    crear:(req,res)=>{
        res.render('products/creacion_producto');
    },

    editar:(req,res)=>{
        
        db.Producto.findByPk(req.params.id)
        .then((productoEncontrado)=>{
            res.render("products/edicion_producto",{producto: productoEncontrado});
        })

       
    },
    editado:(req,res)=>{

        let idp=req.params.id;

 
            db.Producto.update({nombreProducto:req.body.nombreProducto,
                precio:req.body.precio,
               descripcion:req.body.descripcion},{where:{
                    id:idp
               }})
            res.redirect('/productos');

    },
    
    detail:(req,res)=>{
        
        db.Producto.findByPk(req.params.id)
        .then((productoEncontrado)=>{
            console.log(productoEncontrado.descripcion)
            res.render('products/producto',{producto: productoEncontrado})
        })

    },
    creado:(req,res)=>{

      db.Producto.create(
     {
       nombreProducto: req.body.nombre,
       stock:req.body.cantidad,
       precio:req.body.precio,
       cantidad:req.body.cantidad,
       imagen:req.file.filename,
       descripcion:req.body.descripcion,
    }).then((res.redirect('/productos')))

    },
    destroy:(req,res)=>{
      
        let idp=req.params.id;

        db.Producto.destroy({where:{id:idp}})

        res.redirect('/productos');

    },
    test:(req,res)=>{

        db.Usuario.findAll().then((lista)=>{
            res.render('products/test',{test : lista})
        })

    },

}

module.exports=productosControllers;