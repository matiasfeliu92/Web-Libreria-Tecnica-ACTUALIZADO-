const contenedorProductos = document.getElementById('producDestac')
contenedorProductos.classList.add('productos__destac')

// const contenedorCarrito = document.getElementById('carrito-contenedor')

const carrito = []

const mostrarProductos = (array) => {
    contenedorProductos.innerHTML = ''
    
    array.forEach( (producto) => {
        const div = document.createElement('div')
        div.classList.add('producto__item')
        div.innerHTML = `
                    
                    <h3>${producto.nombre}</h3>
                    <img src=${producto.img} alt="">
                    <p>Precio: $${producto.precio}</p>
                    <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        `
        
        contenedorProductos.appendChild(div)
    } )
}

mostrarProductos(stockProductos)