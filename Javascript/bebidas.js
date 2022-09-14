let bebidas = ['tirano sour', 'my little pony', 'splinter', 'collins & dreams', 'italpark', 'blockbuster club',
'swamp thing', 'george michael', 'jumanji', 'carrapicho tai', 'bowser', 'pantera rosa',
'the inspector', 'la perla del atlantico', 'pinck tonic', 'grin tonic', 'steve', 'cormano', 'bob']
let carrito = []
let bucle = false;
let hacerPedido = true;

do {
    let pedido = parseInt(prompt('Ingrese el código de la bebida que desea agregar'))
    switch (pedido){
        case 0:
            carrito.push(bebidas[0])
            break;
        case 1:
            carrito.push(bebidas[1])
            break;
        case 2:
            carrito.push(bebidas[2])
            break;
        case 3:
            carrito.push(bebidas[3])
            break;
        case 4:
            carrito.push(bebidas[4])
            break;
        case 5:
            carrito.push(bebidas[5])
            break;
        case 6:
            carrito.push(bebidas[6])
            break;
        case 7:
            carrito.push(bebidas[7])
            break;
        case 8:
            carrito.push(bebidas[8])
            break;
        case 9:
            carrito.push(bebidas[9])
            break;
        case 10:
            carrito.push(bebidas[10])
            break;
        case 11:
            carrito.push(bebidas[11])
            break;
        case 12:
            carrito.push(bebidas[12])
            break;
        case 13:
            carrito.push(bebidas[13])
            break;
        case 14:
            carrito.push(bebidas[14])
            break;
        case 15:
            carrito.push(bebidas[15])
            break;
        case 16:
            carrito.push(bebidas[16])
            break;
        case 17:
            carrito.push(bebidas[17])
            break;
        case 18:
            carrito.push(bebidas[18])
            break;
        default:
            alert(`No introduciste un código válido`)
        }
        bucle = confirm('Desea agregar algo más al carrito?');
} while (bucle);
console.log(carrito)
alert('En la consola se mostrará todo su carrito');