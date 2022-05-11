/*const carritos = {

    comprobarCarrito: function() {
        let existe = false;
        let carrito = JSON.parse(localStorage.getItem('carrito'));
        if (carrito != null) {
            existe = true;
        }
        return existe;
    },

    agregarAlCarrito: function(producto) {
        if (this.comprobarCarrito()) {
            var cas = new Array;
            cas = JSON.parse(localStorage.getItem('carrito'))
            let existencias = this.comprobarExistencias(carrito, producto)
            if (existencias != undefined) {
                localStorage.removeItem('carrito');
                localStorage.setItem('carrito', JSON.stringify(existencias));
            } else {
                console.log(JSON.parse(cas))
                localStorage.removeItem('carrito');
                localStorage.setItem('carrito', JSON.stringify(carrito));
            }
        } else {
            let carrito = [];
            carrito.push(producto)
            localStorage.setItem('carrito', JSON.stringify(carrito))
        }
    },

    crearCarrito: function() {
        let carrito = [];
        localStorage.setItem('carrito', JSON.stringify(carrito));
        return JSON.parse(localStorage.getItem('carrito'));
    },

    comprobarExistencias: function(carrito, producto) { //comprueba si hay algun producto con mismo id y si existe une esos productos y devuelve un nuevo array, si no existe devuelve undefined
        var c;
        var p;
        var nuevoCarrito;
        var productoAgregar = {};
        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].id == producto.id) {
                c = carrito.filter((e) => {
                    return e != carrito[i];
                })

                p = carrito.filter((g) => {
                    return g = carrito[i]
                })

                productoAgregar = {
                    id: producto.id,
                    nombre: producto.nombre,
                    cantidad: producto.cantidad + p[0].cantidad,
                    precio: this.cantidad * p[0].precio
                }

                nuevoCarrito = c.push(productoAgregar)
            }
        }
        return nuevoCarrito
    }
}

export default carritos*/