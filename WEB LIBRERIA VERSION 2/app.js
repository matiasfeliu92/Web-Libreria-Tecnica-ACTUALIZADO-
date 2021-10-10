const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
contenedorModal.addEventListener('click', ()=>{
    botonCerrar.click()
})
modalCarrito.addEventListener('click', (event)=>{
    event.stopPropagation()
})


// contenedorModal.addEventListener('transitionend', ()=>{
//     console.log('termino la transicion del modal')
// })


// == selectores ==
const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')

const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

const carrito = []    

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
                <h3>${producto.nombre}</h3>
                <img src=${producto.img} alt="">
                <p class="precioProducto">Precio: $${producto.precio}</p>
                <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar al carrito <i class="fas fa-shopping-cart"></i></button>
    `

    contenedorProductos.appendChild(div)
})

const productosToString = JSON.stringify(stockProductos)

localStorage.setItem('productos', productosToString)

console.log(stockProductos)


// === AGREGAR AL CARRITO ===


const agregarAlCarrito = (itemId) => {

    const productoEnCarrito = carrito.find((prod) => prod.id === itemId)

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++
    } else {

        const producto = stockProductos.find((prod) => prod.id === itemId)

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

    contadorCarrito.innerText = carrito.reduce((acc, prod) => acc += prod.cantidad, 0)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc += prod.precio * prod.cantidad, 0)
}

// === ELIMINAR PRODUCTO ===

const eliminarProducto = (itemId) => {
    const producto = carrito.find((prod) => prod.id === itemId)

    producto.cantidad--

        if (producto.cantidad === 0) {
            const index = carrito.indexOf(producto)
            carrito.splice(index, 1)
        }

    actualizarCarrito()
}
