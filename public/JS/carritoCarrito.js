window.addEventListener('load', function() {
    const contenedorProductos = document.getElementById('nacho_productos');
    const contenedorTotal = document.getElementById('contenedorDeTotal');
    var productos = JSON.parse(localStorage.getItem('carrito'));
    var eliminar = document.getElementById('eliminar');
    var activado = false;

    function estadoCarrito() {
        let a
        localStorage.getItem('carrito') == null ? a = true : a = false;
        return a
    }

    if (estadoCarrito() == false) {
        var total = 0
        productos.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('nacho_subproducto');
            div.innerHTML += `<div class="nacho_izquierda">
                                <img class="nacho_foto" src="imag/${producto.foto}">
                                <div class="nacho_detalle">
                                <h4>${producto.nombre}</h4>
                                <p> ${producto.descripcion}</p>
                                </div>
                            </div>
                            <div class="nacho_derecha">
                                
                                <div> Cantidad : ${producto.cantidad}</div>
                                <div> Precio : ${producto.precio}</div>
                                <div><b>Subtotal</b> $${producto.precio * producto.cantidad}</div>
                            </div>`
            contenedorProductos.appendChild(div);
            total = total + producto.precio * producto.cantidad
        });
        const dev = document.createElement('dev');
        dev.classList.add('nacho_total');
        dev.innerHTML += `<p><b>TOTAL</b>: ${total}</p>`

        contenedorTotal.appendChild(dev);

    }

    if (productos.length === 0 && activado == false) {
        const div = document.createElement('div');
        div.classList.add('nacho_subproducto');
        div.innerHTML += `<div> <p>El carrito esta vacio</p></div>`
        contenedorProductos.appendChild(div);
        activado = true
    }

    eliminar.addEventListener('click', (e) => {
        if (productos.length != 0) {
            if (estadoCarrito() == false) {
                let eliminado = productos.pop()
                localStorage.setItem('carrito', JSON.stringify(productos))
                if (estadoCarrito() == false) {
                    var total = 0
                    productos.forEach(producto => {
                        contenedorProductos.removeChild(div)
                        const div = document.createElement('div');
                        div.classList.add('nacho_subproducto');
                        div.innerHTML += `<div class="nacho_izquierda">
                                        <img class="nacho_foto" src="imag/${producto.foto}">
                                        <div class="nacho_detalle">
                                        <h4>${producto.nombre}</h4>
                                        <p> ${producto.descripcion}</p>
                                        </div>
                                    </div>
                                    <div class="nacho_derecha">
                                        
                                        <div> Cantidad : ${producto.cantidad}</div>
                                        <div> Precio : ${producto.precio}</div>
                                        <div><b>Subtotal</b> $${producto.precio * producto.cantidad}</div>
                                    </div>`
                        contenedorProductos.appendChild(div);
                        total = total + producto.precio * producto.cantidad
                    });
                    const dev = document.createElement('dev');
                    dev.classList.add('nacho_total');
                    dev.innerHTML == `<p><b>TOTAL</b>: ${total}</p>`

                    contenedorTotal.appendChild(dev);

                }




                if (productos.length === 0 && activado == false) {
                    const div = document.createElement('div');
                    div.classList.add('nacho_subproducto');
                    div.innerHTML += `<div> <p>El carrito esta vacio</p></div>`
                    contenedorProductos.appendChild(div);
                    activado = true;
                }
            }
        }
    })


})