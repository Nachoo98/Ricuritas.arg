/*<i class="fas fa-trash-alt">*/
window.addEventListener('load', function() {
    const contenedorProductos = document.getElementById('nacho_productos');
    const contenedorTotal = document.getElementById('contenedorDeTotal');
    var productos = JSON.parse(localStorage.getItem('carrito'));
    var eliminar = document.getElementById('eliminar2');
    var eliId = document.getElementById('eliId')
    var activadoVacio = false;
    var activadoListas = true;
    console.log(eliminar)

    function estadoCarrito() {
        let a
        localStorage.getItem('carrito') == null ? a = true : a = false;
        return a
    }

    if (estadoCarrito() == false && activadoListas == true) {
        var total = 0
        productos.forEach((producto, i) => {
            const div = document.createElement('div');
            div.classList.add('nacho_subproducto');
            div.innerHTML += 
                        `<div class="nacho_izquierda">
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
                            <button id="eliminar${i}"  type="submit" > Eliminar</button >
                        </div>
        <span id='eliId' class="invisible">
            ${i}
        </span>`
            contenedorProductos.appendChild(div);
            total = total + producto.precio * producto.cantidad
        });
        const dev = document.createElement('dev');
        dev.classList.add('nacho_total');
        dev.innerHTML += `<p><b>TOTAL</b>: ${total}</p>`

        contenedorTotal.appendChild(dev);

    }

    if (productos.length === 0 && activadoVacio == false) {
        const div = document.createElement('div');
        div.classList.add('nacho_subproducto');
        div.innerHTML += `<br><br><br><br><br><br><br><br><br><br><div> <p>El carrito esta vacio</p></div><br><br><br><br><br><br><br><br><br><br><br><br><br><br>`
        contenedorProductos.appendChild(div);
        activadoVacio = true
    }

    eliminar.addEventListener('click', (e) => {
        console.log("Vamos BOkEEEEE")
        if (productos.length != 0) {
            if (estadoCarrito() == false) {
                activadoListas = false
                let eliminado = productos.pop()
                localStorage.setItem('carrito', JSON.stringify(productos))
                contenedorProductos.innerHTML = ''
                contenedorTotal.innerHTML = ''
                if (productos.length != 0) {
                    var total = 0
                    productos.forEach((producto,i) => {
                        const div1 = document.createElement('div');
                        div1.classList.add('nacho_subproducto');
                        div1.innerHTML = `<div class="nacho_izquierda">
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
                                        <button id="eliminar2"  type="submit" value="Eliminar"> Eliminar</button>
                                        </div>
                                        <span id='eliId${i}' class="invisible">
                                            ${i}
                                        </span>`
                        contenedorProductos.appendChild(div1);
                        total = total + producto.precio * producto.cantidad

                    });
                    const dev = document.createElement('dev');
                    dev.classList.add('nacho_total');
                    dev.innerHTML = `<p><b>TOTAL</b>: ${total}</p>`
                    contenedorTotal.appendChild(dev);
                }




                if (productos.length === 0 && activadoVacio == false) {
                    const div = document.createElement('div');
                    div.classList.add('nacho_subproducto');
                    div.innerHTML = `<br><br><br><br><br><br><br><br><br><br><div> <p>El carrito esta vacio</p></div><br><br><br><br><br><br><br><br><br><br><br><br><br><br>`
                    contenedorProductos.appendChild(div);
                    contenedorTotal.innerHTML = '';
                    const dev = document.createElement('div');
                    dev.classList.add('nacho_total');
                    dev.innerHTML = `<p><b>TOTAL</b>: $0</p>`
                    contenedorTotal.appendChild(dev);
                    activadoVacio = true;
                }
            }
        }
    })


})