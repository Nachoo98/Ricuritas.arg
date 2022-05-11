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
    var añadirCarrito = document.getElementById("añadirCarrito");
    var foto = document.getElementById('imagens');
    var eliminar = document.getElementById('eliminar');
    var descripcion = document.getElementById('descripcion');




    form.addEventListener('submit', (e) => {
        e.preventDefault();

        producto = {
            "id": id.innerText.trim(),
            "nombre": nombreProducto.innerText,
            "precio": parseInt(precio.innerText.slice(1)) * parseInt(cantidad.value),
            "cantidad": parseInt(cantidad.value),
            "foto": foto.innerText.trim(),
            "descripcion": descripcion.innerText,
        }


        if (estadoCarrito() == false) {
            let carrito = JSON.parse(localStorage.getItem('carrito'))
            carrito.push(producto)
            localStorage.setItem('carrito', JSON.stringify(carrito))
        } else {
            let carrito = [];
            carrito.push(producto)
            localStorage.setItem('carrito', JSON.stringify(carrito))
        }



    })

    eliminar.addEventListener('click', (e) => {
        if (estadoCarrito() == false) {
            let carrito = JSON.parse(localStorage.getItem('carrito'))
            let eliminado = carrito.pop()
            localStorage.setItem('carrito', JSON.stringify(carrito))
        }
    })

    function cantidad() {
        let carrito = JSON.parse(localStorage.getItem('carrito'))
        var total = 1
        for (let i = 0; i < carrito.length; i++) {
            total = carrito[i].cantidad + total
        }
        return total
    }



    function totalCarrito() {
        let carrito = JSON.parse(localStorage.getItem('carrito'))
        var total = 0
        for (let i = 0; i < carrito.length; i++) {
            total = carrito[i].precio + total
        }
        return total
    }
    console.log(totalCarrito())

    function cantidad() {
        let carrito = JSON.parse(localStorage.getItem('carrito'))
        return carrito.length
    }


    console.log(cantidad())

    function productosPorId() {
        let carrito = JSON.parse(localStorage.getItem('carrito'))

        for (let i = 0; i < carrito.length; i++) {
            console.log(carrito[i].id)
        }
    }
    productosPorId()


})