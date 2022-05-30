window.addEventListener('load', function() {
    const contenedorProductos = document.getElementById('nacho_productos');
    const contenedorTotal = document.getElementById('contenedorDeTotal');
    var productos = JSON.parse(localStorage.getItem('carrito'));

function existeCarrito() {
        let a = 'no'
        let b = 'si'
        if(localStorage.getItem('carrito') == null){
            return a
        }else{
            return b
        }
    }

function renderizar(){
    if(existeCarrito()==='no'){
        const div = document.createElement('div');
        div.classList.add('nacho_subproducto');
        div.innerHTML += `<br><br><br><br><br><br><br><br><br><br><div> <p>El carrito esta vacio</p></div><br><br><br><br><br><br><br><br><br><br><br><br><br><br>`
        contenedorProductos.appendChild(div);
    } else if (existeCarrito()==='si' && productos.length === 0){
        const div = document.createElement('div');
        div.classList.add('nacho_subproducto');
        div.innerHTML += `<br><br><br><br><br><br><br><br><br><br><div> <p>El carrito esta vacio</p></div><br><br><br><br><br><br><br><br><br><br><br><br><br><br>`
        contenedorProductos.appendChild(div);
    } else {
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
                            <button id="eliminar${i}"  type="submit" value="Eliminar" > Eliminar</button >
                        </div>`
            contenedorProductos.appendChild(div);
            total = total + producto.precio * producto.cantidad
            botonEliminar(i)
        });
        const dev = document.createElement('dev');
        dev.classList.add('nacho_total');
        dev.innerHTML += `<p><b>TOTAL</b>: ${total}</p>`
        contenedorTotal.appendChild(dev);
    }
}


function botonEliminar(id){
    const btnEliminar = document.getElementById(`eliminar${id}`);
    btnEliminar.addEventListener('click',()=>{
        productos.splice(id,1)
        localStorage.setItem('carrito', JSON.stringify(productos))
        contenedorProductos.innerHTML = ''
        contenedorTotal.innerHTML = ''
        renderizar()
    })
}

renderizar()

})