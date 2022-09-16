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
let carrito = []
let bucle = false;
let hacerPedido = true;
do {
    let pedido = parseInt(prompt('Ingrese el código de la bebida que desea agregar'));
    switch (pedido){
        case 1:
            carrito.push(bebidas[0].name)
            break;
        case 2:
            carrito.push(bebidas[1].name)
            break;
        case 3:
            carrito.push(bebidas[2].name)
            break;
        case 4:
            carrito.push(bebidas[3].name)
            break;
        case 5:
            carrito.push(bebidas[4].name)
            break;
        case 6:
            carrito.push(bebidas[5].name)
            break;
        case 7:
            carrito.push(bebidas[6].name)
            break;
        case 8:
            carrito.push(bebidas[7].name)
            break;
        case 9:
            carrito.push(bebidas[8].name)
            break;
        case 10:
            carrito.push(bebidas[9].name)
            break;
        case 11:
            carrito.push(bebidas[10].name)
            break;
        case 12:
            carrito.push(bebidas[11].name)
            break;
        case 13:
            carrito.push(bebidas[12].name)
            break;
        case 14:
            carrito.push(bebidas[13].name)
            break;
        case 15:
            carrito.push(bebidas[14].name)
            break;
        case 16:
            carrito.push(bebidas[15].name)
            break;
        case 17:
            carrito.push(bebidas[16].name)
            break;
        case 18:
            carrito.push(bebidas[17].name)
            break;
        case 19:
            carrito.push(bebidas[18].name)
            break;
        default:
            alert(`No introduciste un código válido`)
        }
        bucle = confirm('Desea agregar algo más al carrito?');
} while (bucle);


alert(`Tu pedido es se mostrará en consola`)
console.log(carrito)