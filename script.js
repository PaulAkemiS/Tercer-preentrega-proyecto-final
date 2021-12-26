let lista = []

//Traemos los productos del json
$.getJSON('productos.json', function (data) {


    data.forEach(elemento => lista.push(elemento))

    mostrarCarrito()
})


class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.stock = parseInt(stock);
    }
}

const carrito = []


let producto;

//Agregamos los productos al hmtl
let btn1 = $("#producto1");
btn1.click(function (e) {
    e.preventDefault();
    agregarElemento(1);

    //Alert de producto agregado al carrito
    swal(`Agregaste ${lista[0].nombre} a tu carrito`);
})

localStorage.getItem("producto1");

let btn2 = $("#producto2");
btn2.click(function (e) {
    e.preventDefault();
    agregarElemento(2);
    swal(`Agregaste ${lista[1].nombre} a tu carrito`);
})
localStorage.getItem("producto2");

let btn3 = $("#producto3");
btn3.click(function (e) {
    e.preventDefault();
    agregarElemento(3);
    swal(`Agregaste ${lista[2].nombre} a tu carrito`);
})
localStorage.getItem("producto3");

let btn4 = $("#producto4");
btn4.click(function (e) {
    e.preventDefault();
    agregarElemento(4);
    swal(`Agregaste ${lista[3].nombre} a tu carrito`);
})
localStorage.getItem("producto4");

let btn5 = $("#producto5");
btn5.click(function (e) {
    e.preventDefault();
    agregarElemento(5);
    swal(`Agregaste ${lista[4].nombre} a tu carrito`);
})
localStorage.getItem("producto5");

let btn6 = $("#producto6");
btn6.click(function (e) {
    e.preventDefault();
    agregarElemento(6);
    swal(`Agregaste ${lista[5].nombre} a tu carrito`);
})
localStorage.getItem("producto6");

//Agrega los productos al carrito
function agregarElemento(productoID) {
    producto = lista.find(function (producto) {
        if (producto.id == productoID)
            return true;
        else
            return false;
    })

    carrito.push(producto);

    mostrarCarrito();
}

function mostrarCarrito() {
    let contenedor = document.getElementById("carrito");
    let precioTotal = 0


    contenedor.innerHTML = "";
    htmlString = "CARRITO <ul>";
    for (const id in carrito) {
        let producto = carrito[id]
        htmlString += `
            <li class="listaCarrito"> ${producto.nombre}, $ ${producto.precio}
            <button id="carrito_${id}" class="eliminar"> Eliminar</button>
            </li>`
        precioTotal += producto.precio;
    }

    htmlString += "</ul>";

    contenedor.innerHTML = htmlString;


    let conetendorPrecio = $('#precio')
    conetendorPrecio.html(`TOTAL: $ ${precioTotal}`);

    loadEliminar();
}


//Elimina los productos del carrito
function loadEliminar() {
    let botones = document.getElementsByClassName("eliminar");
    for (const boton of botones) {

        boton.onclick = () => {
            let id = boton.getAttribute("id");
            idNumber = id.split("_")[1];
            carrito.splice(idNumber, 1);
            localStorage.removeItem("producto1");
            localStorage.removeItem("producto2");
            localStorage.removeItem("producto3");
            localStorage.removeItem("producto4");
            localStorage.removeItem("producto5");
            localStorage.removeItem("producto6");

            mostrarCarrito()
        }
    }

}

//Animación del header
$("#header")
    .slideUp(1)
    .slideDown(1600);