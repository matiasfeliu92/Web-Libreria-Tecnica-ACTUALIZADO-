class Producto {
    constructor(nombreProducto, linkImagen, precioProducto, idProducto, ) {
        this.nombreProducto = nombreProducto;
        this.linkImagen = linkImagen;
        this.precioProducto = precioProducto;
        this.idProducto = idProducto;
        // this.cantProducto = cantProducto;
    }
}

class Compra {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

const productosSeleccionados = []

const producto1 = new Producto("Marcador Sharpie Negro", "./Imagenes/Producto 1 (1).jpeg", 180, "btnProducto01")
const producto2 = new Producto("Cuadernos Universitarios A4", "./Imagenes/Producto 2 (1).jpeg", 160, "btnProducto02")
const producto3 = new Producto("Agenda 2021 Citanova", "./Imagenes/Producto 3 (1).jpeg", 2000, "btnProducto03")
const producto4 = new Producto("Regla De Plastico 15cm", "./Imagenes/Producto 4 (1).jpeg", 80, "btnProducto04")
const producto5 = new Producto("Cuaderno Studio A5 Rayado", "./Imagenes/Producto 5 (1).jpeg", 1000, "btnProducto05")
const producto6 = new Producto("Boligrafo Roller Filgo", "./Imagenes/Producto 6 (1).jpeg", 180, "btnProducto06")
const producto7 = new Producto("Escuadra Pizzini 30 Cm 45º", "./Imagenes/Producto 7 (1).jpeg", 390, "btnProducto07")
const producto8 = new Producto("Regla Pizzini 30 Cm Verde", "./Imagenes/Producto 8 (1).jpeg", 390, "btnProducto08")
const producto9 = new Producto("Adhesivo Voligoma Sintetico", "./Imagenes/Producto 9 (1).jpeg", 130, "btnProducto09")
const producto10 = new Producto("Escuadra Tecnica Pizzini 60° X 35 Cm", "./Imagenes/Producto 10 (1).jpeg", 340, "btnProducto10")
const producto11 = new Producto("Agenda 2021 T/ Dura 14x20cm", "./Imagenes/Producto 11 (1).jpeg", 650, "btnProducto11")
const producto12 = new Producto("Cinta Adhesiva Embalaje Transparente 48mm X 100", "./Imagenes/Producto 12 (1).jpeg", 140, "btnProducto12")

productosSeleccionados.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12);

let carrito = []

const botonCarrito = document.getElementById("carrito")
const modalContainer = document.getElementsByClassName('modal-container')[0]
const modalCerrar = document.getElementById('modal-cerrar')
    // botonCarrito.addEventListener ("click", abrirElCarrito);
modalCerrar.addEventListener('click', () => {
    // modalContainer.classList.remove('modal-active')
    modalContainer.classList.toggle('modal-active')
})
botonCarrito.addEventListener('click', () => {
    // modalContainer.classList.add('modal-active')
    modalContainer.classList.toggle('modal-active');
})


const botonCerrarCarrito = document.getElementById("modal-cerrar")

const ventanaCarrito = document.querySelector("#ventanaCarrito")

function abrirElCarrito() {
    alert("Carrito!!")
}


for (let producto of productosSeleccionados) {
    // const cardProducto = document.getElementsByClassName ("productos__item");
    const contenedor = document.getElementById('producDestac');
    contenedor.classList.add('productos__destac')

    const divProd = document.createElement('div');
    contenedor.appendChild(divProd)
    divProd.classList.add('productos__item')

    const nombreProducto = document.createElement("h3");
    nombreProducto.innerText = `${producto.nombreProducto}`;
    divProd.appendChild(nombreProducto);

    const imgProducto = document.createElement("img");
    imgProducto.setAttribute('src', producto.linkImagen);
    imgProducto.classList.add('productos__img')
    divProd.appendChild(imgProducto);

    const precio = document.createElement('p');
    precio.innerText = `$${producto.precioProducto}`;
    divProd.appendChild(precio);

    const botonAgregarAlCarrito = document.createElement('button');
    botonAgregarAlCarrito.textContent = "+ Agregar al carrito";
    divProd.appendChild(botonAgregarAlCarrito);
    botonAgregarAlCarrito.classList.add("productos__btn");
    botonAgregarAlCarrito.setAttribute("id", `${producto.idProducto}`);
    botonAgregarAlCarrito.setAttribute('type', 'button');
    botonAgregarAlCarrito.addEventListener("click", agregarAlCarrito);
}

///////////FUNCION QUE RENDERIZAR EL CARRITO, MIENTRAS EL USUARIO AGREGA PRODUCTOS//////////
function imprimirCarrito() {
    carrito.forEach(item => {
        
    })
}

function sumarProducto(e) {
    console.log(e.target.id)
}

function restarProducto(e) {
    console.log(e.target.id)
}

function agregarAlCarrito(e) {
    const producto = productosSeleccionados.find(producto => producto.idProducto == e.target.id);

    let cantidadPorDefecto = 1

    carrito.push(new Compra(producto, cantidadPorDefecto))

    const listaCarrito = document.getElementById("listaCarrito");

        // const botonSumar = document.createElement("button");
        // botonSumar.textContent = "+";
        // botonSumar.setAttribute("id", "sumar" + item.producto.idProducto);
        // listaCarrito.appendChild(botonSumar)
        // botonSumar.addEventListener("click", sumarProducto)


        // const botonRestar = document.createElement("button");
        // botonRestar.textContent = "-";
        // botonRestar.setAttribute("id", "restar" + item.producto.idProducto);
        // listaCarrito.appendChild(botonRestar)
        // botonRestar.addEventListener("click", restarProducto)

        const productosCarrito = document.createElement('li');
        productosCarrito.textContent = `Producto: ${item.producto.nombreProducto}, Precio: $${item.producto.precioProducto} , Id del Prodcuto: ${item.producto.idProducto} , cantidad: ${item.producto}`;

        listaCarrito.appendChild(productosCarrito);

        // const itemProduc = productosSeleccionados.find(producto => producto.precio < 3000)

        // productosSeleccionados.push(itemProduc);





}