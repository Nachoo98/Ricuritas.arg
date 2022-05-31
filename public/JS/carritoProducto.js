/*import Carrito from './carritoModelo.js'*/

window.addEventListener('load', function() {
    function estadoCarrito() {
        let a
        localStorage.getItem('carrito') == null ? a = true : a = false;
        return a
    }

    var producto = {
            id: '',
            nombre: '',
            precio: '',
            cantidad: '',
            foto: '',
            descripcion: '',
        }
        /*const carrito = new Carrito('carrito')*/

    var id = document.getElementById('id');
    var form = document.getElementById('form');
    var nombreProducto = document.getElementById("nombreProducto");
    var precio = document.getElementById("precio");
    var cantidad = document.getElementById("cantidad");
    var foto = document.getElementById('imagens');
    var descripcion = document.getElementById('descripcion');




    form.addEventListener('submit', (e) => {
        e.preventDefault();

        producto = {
            "id": id.innerText.trim(),
            "nombre": nombreProducto.innerText,
            "precio": parseInt(precio.innerText.slice(1)),
            "foto": foto.innerText.trim(),
            "descripcion": descripcion.innerText,
        }
        if(parseInt(cantidad.value)!=null && parseInt(cantidad.value)>0 && parseInt(cantidad.value)<=12 ){
            producto.cantidad = parseInt(cantidad.value)
        if (estadoCarrito() == false) {
            let carrito = JSON.parse(localStorage.getItem('carrito'))
            carrito.push(producto)
            localStorage.setItem('carrito', JSON.stringify(carrito))
            alert("agregado")
        } else {
            let carrito = [];
            carrito.push(producto)
            localStorage.setItem('carrito', JSON.stringify(carrito))
            alert("agregado")
        }

    } else {
        alert('Debes ingresar un numero entre 1 y 12')
    }

    })

   


})