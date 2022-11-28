const reservas = [];

class Reserva {
    constructor() {
        this.id = reservas.length + 1;
        this.nombre = prompt('Ingresar un establecimiento');
        this.precio = parseFloat(prompt('Ingresar un precio'));
        this.cantidad = parseInt(prompt('Ingresar una cantidad'));
     
    }
};


let opciones = prompt('1-Agregar reserva  \n 2-Mostrar reservas \n 0-Salir');

const agregarReserva = () => {
    const newReserva = new Reserva();
    reservas.push(newReserva);
    console.log(reservas);
}


const mostrarReserva = () => {
    alert("Reservas realizadas por consola")
    console.log("Usted solicitó ver sus reservas:")
    reservas.forEach((reserva, index) => {
        console.log((index + 1), reserva)
    })
}


const menu = (opcion) => {
    switch (opcion) {
        case '1':
            agregarReserva();
            break

        case '2':
            mostrarReserva()
            break

        default:
            alert('Numero incorrecto, ingrese nuevamente');
            break
    }
    opciones = prompt('1-Agregar reserva  \n 2-Mostrar reservas \n 0-Salir');
}



while (opciones !== '0') {
    menu(opciones)
}