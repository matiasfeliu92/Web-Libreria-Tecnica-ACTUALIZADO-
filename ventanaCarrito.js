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