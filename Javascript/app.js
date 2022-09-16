let agregar = document.querySelectorAll('.carrito');
let bebidas = [
    {id: 1, name: 'Tirano Sour', precio: 950},
    {id: 2, name: 'My Litlle Pony', precio: 750},
    {id: 3, name: 'Splinter', precio: 890},
    {id: 4, name: 'Collins & Dreams', precio: 790},
    {id: 5, name: 'Italpark', precio: 990},
    {id: 6, name: 'Blockbuster Club', precio: 890},
    {id: 7, name: 'Swamp Thing', precio: 1250},
    {id: 8, name: 'George Michael', precio: 650},
    {id: 9, name: 'Jumanji', precio: 850},
    {id: 10, name: 'Carrapicho Tai', precio: 990},
    {id: 11, name: 'Bowser', precio: 690},
    {id: 12, name: 'Pantera Rosa', precio: 690},
    {id: 13, name: 'The Inspector', precio: 790},
    {id: 14, name: 'La perla del Atlantico', precio: 750},
    {id: 15, name: 'Pinck Tonic', precio: 750},
    {id: 16, name: 'Grin Tonic', precio: 750},
    {id: 17, name: 'Steve', precio: 1700},
    {id: 18, name: 'Cormano', precio: 1700},
    {id: 19, name: 'Bob', precio: 1800}
]
alert(`En la consola se muestran los id de las bebidas, una vez visto que desea tomar, clickee el botón "Agregar al pedido"`)
console.log(bebidas);

agregar.forEach(agregarElemento => {
    agregarElemento.addEventListener('click', ()=>{agregarElementoClickeado})
})
function agregarElementoClickeado(event){
    
}