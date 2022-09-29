let contenedorProductos = document.getElementById('bebida');
let contenedorCarrito = document.getElementById('carrito-contenedor')
let imgCarrito = document.getElementById('ImgCarrito')
let bebidasMenu = [
    {id: 1, name: 'Tirano Sour', precio: 950, cantidad: 1, img: '../Image/drink/drink00.png'},
    {id: 2, name: 'My Litlle Pony', precio: 750, cantidad: 1, img: '../Image/drink/drink01.png'},
    {id: 3, name: 'Splinter', precio: 890, cantidad: 1, img: '../Image/drink/drink02.png'},
    {id: 4, name: 'Collins & Dreams', precio: 790, cantidad: 1, img: '../Image/drink/drink03.png'},
    {id: 5, name: 'Italpark', precio: 990, cantidad: 1, img: '../Image/drink/drink04.png'},
    {id: 6, name: 'Blockbuster Club', precio: 890, cantidad: 1, img: '../Image/drink/drink05.png'},
    {id: 7, name: 'Swamp Thing', precio: 1250, cantidad: 1, img: '../Image/drink/drink06.png'},
    {id: 8, name: 'George Michael', precio: 650, cantidad: 1, img: '../Image/drink/drink07.png'},
    {id: 9, name: 'Jumanji', precio: 850, cantidad: 1, img: '../Image/drink/drink08.png'},
    {id: 10, name: 'Carrapicho Tai', precio: 990, cantidad: 1, img: '../Image/drink/drink09.png'},
    {id: 11, name: 'Bowser', precio: 690, cantidad: 1, img: '../Image/drink/drink10.png'},
    {id: 12, name: 'Pantera Rosa', precio: 690, cantidad: 1, img: '../Image/drink/drink11.png'},
    {id: 13, name: 'The Inspector', precio: 790, cantidad: 1, img: '../Image/drink/drink12.png'},
    {id: 14, name: 'La perla del Atlantico', precio: 750, cantidad: 1, img: '../Image/drink/drink13.png'},
    {id: 15, name: 'Pinck Tonic', precio: 750, cantidad: 1, img: '../Image/drink/drink14.png'},
    {id: 16, name: 'Grin Tonic', precio: 750, cantidad: 1, img: '../Image/drink/drink14.png'},
    {id: 17, name: 'Steve', precio: 1700, cantidad: 1, img: '../Image/drink/drink15.png'},
    {id: 18, name: 'Cormano', precio: 1700, cantidad: 1, img: '../Image/drink/drink16.png'},
    {id: 19, name: 'Bob', precio: 1800, cantidad: 1, img: '../Image/drink/drink17.png'}
]
let carrito = []
document.addEventListener('DOMContentLoaded', ()=>{
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

function productosEnCarrito(){
    contenedorCarrito.classList.toggle('abrir');
    contenedorCarrito.classList.toggle('cerrar');
}
imgCarrito.addEventListener('click',()=>{
    productosEnCarrito()
})

bebidasMenu.forEach((producto) =>{
    const div = document.createElement('div')
    div.classList.add('grid')
    div.innerHTML = `<img src=${producto.img} alt="bebida">
    <button id="agregar${producto.id}">Agregar al pedido</button>
    `
    contenedorProductos.appendChild(div);

    let boton = document.getElementById(`agregar${producto.id}`);

    boton.addEventListener('click', ()=>{
        agregarAlCarrito(producto.id)
    })
})

function agregarAlCarrito(prodId) {
    const existe = carrito.some(prod => prod.id === prodId)
    if (existe){
        const prod = carrito.map(prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    }else{
    let item = bebidasMenu.find((prod) => prod.id === prodId)
    carrito.push(item)
    
    }
    actualizarCarrito()
}

function eliminarDelCarrito(prodId){
    let item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}

function actualizarCarrito(){
    contenedorCarrito.innerHTML = ''
    carrito.forEach((prod)=>{
        let div = document.createElement('div');
        div.className = 'productoEnCarrito';
        div.innerHTML = `<p>${prod.name}</p>
        <p>Precio:${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><img src="../Image/delete.png"></img></button>`
        contenedorCarrito.appendChild(div)
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
}