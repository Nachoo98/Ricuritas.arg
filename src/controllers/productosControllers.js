const fs=require('fs');
const path = require('path');

const db = require('../../database/models');


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
        let  idProductoSeleccionado = req.params.id;
		let productoEncontrado=null;

		for (let p of products){
			if (p.id==idProductoSeleccionado){
				productoEncontrado=p;
				break;
			}
		}

		res.render("products/edicion_producto",{producto: productoEncontrado});
       
    },
    editado:(req,res)=>{
        
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
            res.redirect('/productos');
    },
    
    detail:(req,res)=>{
        let  idProductoSeleccionado = req.params.id;
		let productoEncontrado=null;

		for (let p of products){
			if (p.id==idProductoSeleccionado){
				productoEncontrado=p;
				break;
			}
		}
        res.render('products/producto',{producto: productoEncontrado});
    },
    creado:(req,res)=>{
        let productos = products;
        
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
        res.redirect('/productos');
    },
    destroy:(req,res)=>{
      
            let idProductoSeleccionado = req.params.id;
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
           
    
            res.redirect('/productos');
        
    },
    test:(req,res)=>{

        db.Usuario.findAll().then((lista)=>{
            res.render('products/test',{test : lista})
        })

    },

}

module.exports=productosControllers;