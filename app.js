const contenedorProductos = document.getElementById('producDestac')
contenedorProductos.classList.add('productos__destac')

const contenedorCarrito = document.getElementById('listaCarrito')

console.log(contenedorCarrito)

// const contenedorCarrito = document.getElementById('carrito-contenedor')

const carrito = []

const mostrarProductos = (array) => {
    contenedorProductos.innerHTML = ''
    
    array.forEach( (producto) => {
        const div = document.createElement('div')
        div.classList.add('productos__item')
        div.innerHTML = `
                    
                    <h3>${producto.nombre}</h3>
                    <img src=${producto.linkImagen} alt="">
                    <p class="precioProducto">Precio: $${producto.precio}</p>
                    <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">+Agregar al carrito</button>
        `
        contenedorProductos.appendChild(div)
    } )
}

mostrarProductos(stockProductos)

// === AGREGAR AL CARRITO ===


const agregarAlCarrito = (itemId) => {

    const productoEnCarrito = carrito.find((prod) => prod.id === itemId)

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++
    } else {

        const producto = stockProductos.find( (prod) => prod.id === itemId)
    
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        })
    }
    

    console.log(carrito)
    actualizarCarrito()
}

// === RENDER CARRITO ===

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

        div.innerHTML = `
                <p>${prod.nombre}</p>
                <p>Precio: $${prod.precio}</p>
                <p>Cantidad: ${prod.cantidad}</p>
                <button onclick="eliminarProducto(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
             `

        contenedorCarrito.appendChild(div)
    })

    // contadorCarrito.innerText = carrito.reduce((acc, prod) => acc += prod.cantidad, 0)
    // precioTotal.innerText = carrito.reduce((acc, prod) => acc += prod.precio * prod.cantidad, 0)
}
