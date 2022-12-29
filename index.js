

// CODER E-COMMERCE

const productos = [
    {
        id: 1,
        nombre: 'HEPATODERM',
        cantidad: 10,
        descripcion: 'Hepatodren Triple Acción es un potente complemento ultra concentrado que ayudará a mejorar tu salud de hepática, gástrica e intestinal, mejorando tu relación con la comida.',
        precio: 15000,
        imagen: 'https://scontent.fpei3-1.fna.fbcdn.net/v/t1.6435-9/159935788_103737258466873_328878592203651688_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeGweZUBr2g0wMxGsqz7vsFSTU5B-1u1E9pNTkH7W7UT2qtVss0ggbu04sWNL66hlBc&_nc_ohc=w3dbAgOc-CMAX_Ki4c_&_nc_ht=scontent.fpei3-1.fna&oh=00_AfCgURte_JUjKnyAU7DBUzqiBT801eGHJ3rrXBX_njly1A&oe=63BE072C'
    },
    {
        id: 2,
        nombre: 'CALOSTRO BOVINO',
        cantidad: 35,
        descripcion: 'El calostro puede tomarse diariamente como suplemento para ayudar al sistema inmune, aumentar la masa muscular y ayudar a tu cuerpo a recuperarse de la actividad atlética.',
        precio: 65000,
        imagen: 'https://scontent.fpei3-1.fna.fbcdn.net/v/t1.6435-9/160037086_100701038770495_6611878183913468165_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeHQscEAdL_trRnPhdLMABbNhBTDmEhPg4KEFMOYSE-DgkUI338xyP1KUvhLzieqbX4&_nc_ohc=fGKCENTaNUIAX-1tUgU&tn=z_4poxdi0VIz2stC&_nc_ht=scontent.fpei3-1.fna&oh=00_AfDD1j2ps-hQQz_nvLKc-aWDLuIyH_4g7lPquU0ZSVZvOg&oe=63BE0D5C'
    },  
    {
        id: 3,
        nombre: 'RETRUIL',
        cantidad: 15,
        descripcion: ' Reutril es un suplemento dietarios, con propiedades antinflamatorias y analgésicas que permite controlar el dolor.',
        precio: 50000,
        imagen: 'https://scontent.fpei3-1.fna.fbcdn.net/v/t1.6435-9/159500758_100701058770493_6449645218532979193_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeFsI8Ta3JxI7P_7fbS2JJX3H-Z7FHCeOeEf5nsUcJ454dYAek5HWARnt71YXDbEsn4&_nc_ohc=aG3PTk0oSoIAX9oBlm2&tn=z_4poxdi0VIz2stC&_nc_ht=scontent.fpei3-1.fna&oh=00_AfD1tME6KoFIZTsJIRb3ZIz-hgv_3uUSkNVcQ2VfRda39w&oe=63BDF795'
    },  
    {
        id: 4,
        nombre: 'MULTIVITAMINICO',
        cantidad: 70,
        descripcion: 'Los multivitamínicos están ahí para complementar las vitaminas y minerales que obtienes de los alimentos y acercarte un paso más a tus objetivos de salud y bienestar.',
        precio: 100000,
        imagen: 'https://scontent.fpei1-1.fna.fbcdn.net/v/t1.6435-9/158591174_103738851800047_2716292310033613492_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeERGu1AG3tYFvjW6ZRInITLzaWGA_IK4nTNpYYD8gridKWZ2U0UkANxogKHUP13thI&_nc_ohc=RKiB9hIBoD8AX-I8x85&_nc_oc=AQk-HlcLsowE9kwhNCYpS7CDOCkMk8pKyUK8PF975Ujno1JDFn7581_ne5qsnkbiVyYgp2VqPCiFEXiDPfXSrFOl&_nc_ht=scontent.fpei1-1.fna&oh=00_AfBOsq2yoeCYKJrKW2mxZmdk5hayH5iRB7QpQxsCKmAaRg&oe=63BDE487'
    },  
    {
        id: 5,
        nombre: 'BIOTINA',
        descripcion: 'La biotina es una vitamina B que se encuentra en muchos alimentos y ayuda a convertir los carbohidratos, las grasas y las proteínas que consume en energía que usted necesita.',
        cantidad: 90,
        precio: 80000,
        imagen: 'https://scontent.fpei3-1.fna.fbcdn.net/v/t1.6435-9/160251012_103737825133483_4128378874838208867_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeGWZP3muD8oC0SiucqrqtQzqfZ7efdJV9ap9nt590lX1k8Kj59_NP5u9IY1fmStNP4&_nc_ohc=gAp3qPQ2L4MAX9sYhX7&_nc_ht=scontent.fpei3-1.fna&oh=00_AfBH_3g_3keXe3uzZavwtm1r_hS_fa89dE7FK9rQfh_sjg&oe=63BDE9BB'
    },
];

let carrito = [];

var textoActivo="naturaline"
var URL="https://www.facebook.com/NaturalineSAS/?paipv=0&eav=AfbBfNTulgppeC55HoHD0cZNQvpF2Bl-8gtd2UjWMrhHNeUXbYUivzYvOcmaAKVaqR4"



class Carrito {
    constructor(id, nombre, cantidad, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.imagen = imagen;
        this.total = precio * cantidad;
    }
}

const contenedor = document.getElementById('contenedor');
const inputSearch = document.getElementById('input-search');
const contenedorCarrito = document.getElementById('contenedor-carrito');
const modalCompra = new bootstrap.Modal(document.getElementById('modal-compra'))
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalWeb = document.getElementById('btn-web');
const modalPagar = document.getElementById('btn-pagar');

const agregarAlCarrito = (id) => {
    if (!id) {
        return;
    }
    const producto = productos.find(el => el.id === id);

    if (producto) {
        const productoCarrito = new Carrito(producto.id, producto.nombre, 1, producto.precio, producto.imagen);

        if (carrito.some(el => el.id === id)) {
            const target = carrito.find(el => el.id === id);
            carrito = carrito.filter(el => el.id !== id);

            const nuevoProducto = new Carrito(target.id, target.nombre, target.cantidad + 1, target.precio, target.imagen);
            carrito.push(nuevoProducto)
        } else {
            carrito.push(productoCarrito);
        }

    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    listarCarrito(carrito)
}

const listarCarrito = (productosCarrito) => {
    let acumulador = '';

    productosCarrito.forEach((producto) => {
        acumulador += `
        <tr>
        <th scope="row">${producto.id}</th>
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>$${producto.total}</td>
            <button class="btn botonEstilo" id="eliminar ${producto.id}">
           
            
        </tr>
        `
    })
    contenedorCarrito.innerHTML = acumulador;
}

const dibujarProductos = (productos, contenedor) => {
    let acumulador = '';

    productos.forEach(element => {
        acumulador += `
        <div class="card" style="width: 18rem;">
            <img src="${element.imagen}" class="card-img-top" alt="${element.nombre}.">
            <div class="card-body">
                <h5 class="card-title">${element.nombre}</h5>
                <p class="card-text">Cantidad: ${element.cantidad}</p>
                <p class="card-text">Precio: $${element.precio}</p>
                <a href="#" onclick="agregarAlCarrito(${element.id})" class="btn btn-success">Comprar</a>
                <a href="#" onclick="mostrarModal(${element.id})" class="btn btn-info">Vista Previa</a>
            
            </div>
        </div>
        `
    });
    contenedor.innerHTML = acumulador;
}

dibujarProductos(productos, contenedor)

const handleSearch = (e) => {
    console.log(e.target.value);

    const filtrados = productos.filter(producto => producto.nombre.toLocaleLowerCase().includes(e.target.value.toLowerCase()))

    dibujarProductos(filtrados, contenedor)
} 

if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'));
    listarCarrito(carrito)

}

inputSearch.addEventListener('input', handleSearch)



//Funcion para eliminar la producto

const eliminarDelCarrito = (id) => {
    const producto = carrito.find((carrito) => carrito.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();

    //Aca tamb podemos trabajar con el local storage
    localStorage.setItem("carrito", JSON.stringify(carrito));

}


const mostrarModal = (id) =>{
    const producto = productos.find(producto => producto.id === id);

    if (!producto) {
        return;
    }

    modalTitle.innerText = producto.nombre;
    modalBody.innerHTML = `
        <div class="d-flex flex-row w-100">
            <div>
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}.">
            </div>
            <div>
            <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Cantidad: ${producto.cantidad}</p>
                <p class="card-text">Descripcion: ${producto.descripcion}</p>
                <p class="card-text">Precio: $ ${producto.precio.toLocaleString('es', {
                    minimumFractionDigits: 2, maximumFractionDigits: 2
                })}</p>
                <p button class="btn btn-danger btn-sm" oncli${producto.cantidad}</p>
            </div>
        </div>
    `
    
    modalCompra.show();
}
