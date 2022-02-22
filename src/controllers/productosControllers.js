const fs=require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname,'../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));// posible falla


const productosControllers={
    index:(req,res)=>{

        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('products/listado-productos',{productos:products});
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
    creado:(req,res)=>{
        let productos = products;

		let idNuevo = productos[productos.length-1].id + 1;

      let nuevoProducto = {
			id: idNuevo,
			nombre: req.body.nombre,
			price: req.body.price,
			description: req.body.description,
			imagen: "https://robohash.org/rationeeumet.png?size=50x50&set=set1",
		};

        productos.push(nuevoProducto);
        fs.writeFileSync(productsFilePath, JSON.stringify(productos,null,' '));
        res.redirect('/productos');
    },

}

module.exports=productosControllers;