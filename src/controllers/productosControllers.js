const productosControllers={
    crear:(req,res)=>{
        res.render('products/creacion_producto');
    },
    editar:(req,res)=>{
        res.render('products/edicion_producto');
    },

}

module.exports=productosControllers;