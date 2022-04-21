const fs=require('fs');
const path = require('path');

const db = require('../../database/models');


/*const productsFilePath = path.join(__dirname,'../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));*/


const productosControllers={
    index:(req,res)=>{

        db.Producto.findAll().then((productos)=>{
            res.render('products/listado-productos',{productos:productos});
        })
        /*const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));*/
      
    },
    crear:(req,res)=>{
        res.render('products/creacion_producto');
    },

    editar:(req,res)=>{
        
        db.Producto.findByPk(req.params.id)
        .then((productoEncontrado)=>{
            res.render("products/edicion_producto",{producto: productoEncontrado});
        })
       
       
        /*let  idProductoSeleccionado = req.params.id;
		let productoEncontrado=null;

		for (let p of products){
			if (p.id==idProductoSeleccionado){
				productoEncontrado=p;
				break;
			}
		}

		res.render("products/edicion_producto",{producto: productoEncontrado});*/
       
    },
    editado:(req,res)=>{

        let idp=req.params.id;

 
            db.Producto.update({nombreProducto:req.body.nombreProducto,
                precio:req.body.precio,
               descripcion:req.body.descripcion},{where:{
                    id:idp
               }})
            res.redirect('/productos');
    
        /*
            let productoModificado = req.body;
            let productoId=req.params.id;
            let productos = products;
    
            for(let p of productos){
                if(p.id==productoId){
                    p.nombre=productoModificado.nombre;
                    p.price=productoModificado.price;
                    p.description=productoModificado.description;
                    break
                }
            }
        
            fs.writeFileSync(productsFilePath, JSON.stringify(productos , null , ' '));
            res.redirect('/productos');*/
    },
    
    detail:(req,res)=>{
        
        db.Producto.findByPk(req.params.id)
        .then((productoEncontrado)=>{
            console.log(productoEncontrado.descripcion)
            res.render('products/producto',{producto: productoEncontrado})
        })
        /*let  idProductoSeleccionado = req.params.id;
		let productoEncontrado=null;

		for (let p of products){
			if (p.id==idProductoSeleccionado){
				productoEncontrado=p;
				break;
			}
		}res.render('products/producto',{producto: productoEncontrado});*/
    },
    creado:(req,res)=>{

      db.Producto.create(
     {
       nombreProducto: req.body.nombre,
       stock:req.body.cantidad,
       precio:req.body.price,
       cantidad:req.body.cantidad,
       imagen:req.file.filename,
       descripcion:req.body.description,
    }).then((res.redirect('/productos')))



        /*let productos = products;
        
        let nombreImagen=req.file.filename;

		let idNuevo = productos[productos.length-1].id + 1;

      let nuevoProducto = {
			id: idNuevo,
			nombre: req.body.nombre,
			price: req.body.price,
			description: req.body.description,
			imagen: nombreImagen,
		};

        productos.push(nuevoProducto);
        fs.writeFileSync(productsFilePath, JSON.stringify(productos,null,' '));
        res.redirect('/productos');*/
    },
    destroy:(req,res)=>{
      
        let idp=req.params.id;

        db.Producto.destroy({where:{id:idp}})

        res.redirect('/productos');


            /*let idProductoSeleccionado = req.params.id;
            let productoEncontrado=null;
    
            for (let p of products){
                if (p.id==idProductoSeleccionado){
                    productoEncontrado=p;
                    break;
                }
            }
    
            let productos2 = products.filter(function(e){
                return e.id!=productoEncontrado.id;
            })


            fs.unlinkSync(path.join(__dirname, '../../public/imag', productoEncontrado.imagen));
            fs.writeFileSync(productsFilePath, JSON.stringify(productos2,null,' '));
           */
    },
    test:(req,res)=>{

        db.Usuario.findAll().then((lista)=>{
            res.render('products/test',{test : lista})
        })

    },

}

module.exports=productosControllers;