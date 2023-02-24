//BIENVENIDA
alert ("Bienvenidos al Cine Gran Rex")

function saludar(){
    return "Bienvenidos al Cine Gran Rex"
}
let saludo = saludar();
console.log(saludo)


//TICKETS A COMPRAR
let cantidadTickets = prompt("Ingrese cantidad de tickets: ");

const TICKET = 700;
let impuestoA = 1.25;
let impuestoB = 1.05;
let descuento = 0.25;
let totalApagar = 0;

if (cantidadTickets >= 8){
    let precio = cantidadTickets * TICKET
    totalApagar = precio - precio * descuento;
    console.log("El monto a pagar por las " + cantidadTickets + " entradas" + " es de : " + "$ " + totalApagar)
}else if (cantidadTickets <=8 && cantidadTickets >=4){
    totalApagar = (cantidadTickets * TICKET) * impuestoB;
    console.log("El monto a pagar por las " + cantidadTickets + " entradas" + " es de : " + "$ " + totalApagar)
}else if (cantidadTickets < 4 && cantidadTickets > 0){
    totalApagar = (cantidadTickets * TICKET) * impuestoA;
    console.log("El monto a pagar por las " + cantidadTickets + " entradas" + " es de : " + "$ " + totalApagar)
}else{
    console.log("Ingrese una cantidad valida de tickets...")
}

//PRODUCTOS A COMPRAR (SNACK,BEBIDAS,ETC) PARA LA PELICULA

let cantidadProductos = Number(prompt("ingrese cantidad de productos a comprar" ));
let acumulador = 0;

for (i = 0; i < cantidadProductos; i += 1){
    let producto = Number(prompt("ingrese el valor del producto "))
    console.log("Producto n° " + i + ":" + "  $" + producto )
    acumulador += producto;
    
}
console.log("el monto a pagar por los productos es: " + "$ " + acumulador)


//TOTAL A PAGAR
function sumarTotal(totalApagar, acumulador){
    return totalApagar + acumulador
}
const RESULTADO = sumarTotal(totalApagar, acumulador);
console.log("EL TOTAL A PAGAR ES DE: " + "$" + RESULTADO)