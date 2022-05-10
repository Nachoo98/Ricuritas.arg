window.addEventListener('load', function() {
    let producto = document.querySelector('#formulario_producto'); //capturar producto
    
    const nombre=this.document.querySelector(".nombre");
    const precio=this.document.querySelector(".precio");

  

    producto.addEventListener("submit", function(e){
        e.preventDefault();

        const nombreProducto=nombre.innerHTML;//nombre en string
        const precioProducto=parseInt(precio.innerHTML); //precio en numero
     

       var carrito={'nombre': nombreProducto,'precio': precioProducto}
        
       //localStorage.setItem('carrito', JSON.stringify(carrito));
  
       var retrievedCarrito = localStorage.getItem('carrito'); //aca tenemos el objeto en el carrito
     
       //console.log(JSON.parse(retrievedCarrito)); //se imprime correctamente
       const array=[];

       if(retrievedCarrito==null){
        array.push(carrito)
        localStorage.setItem('carrito', JSON.stringify(array));

       }else {

         array.push(retrievedCarrito);
         array.push(carrito);
         localStorage.setItem('carrito', JSON.stringify(array));

       }

          console.log(array);    
         

    })



 

  //capturar los elementos deseados y cargarlos en un localStorage mandarlos a la base de datos (la compra)
  //-agregar
  //-quitar
  //-modificar
})