const API_URL = "https://fakestoreapi.com/products";
const productosContainer = document.getElementById("productos-container");
const carritoLista = document.getElementById("carrito");
const totalTexto = document.getElementById("total");
const comprarBtn = document.getElementById("comprar");
const loader = document.getElementById("loader");
const mensajeExito = document.getElementById("mensaje-exito");

let carrito = [];

// Cargar productos desde la API
async function cargarProductos() {
    try {
        const respuesta = await fetch(API_URL);
        const productos = await respuesta.json();
        mostrarProductos(productos);
    } catch (error) {
        console.error("Error al obtener los productos:", error);
    }
}

// Mostrar productos en la tienda
function mostrarProductos(productos) {
    productosContainer.innerHTML = ""; // Limpiar contenedor
    productos.forEach(producto => {
        const divProducto = document.createElement("div");
        divProducto.classList.add("producto");
        divProducto.innerHTML = `
            <img src="${producto.image}" alt="${producto.title}">
            <h3>${producto.title}</h3>
            <p>$${producto.price.toFixed(2)}</p>
            <button onclick="agregarAlCarrito(${producto.id}, '${producto.title}', ${producto.price})">Agregar</button>
        `;
        productosContainer.appendChild(divProducto);
    });
}

// Agregar producto al carrito
function agregarAlCarrito(id, nombre, precio) {
    const productoExistente = carrito.find(item => item.id === id);
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({ id, nombre, precio, cantidad: 1 });
    }
    actualizarCarrito();
}

// Actualizar el carrito en la interfaz
function actualizarCarrito() {
    carritoLista.innerHTML = "";
    let total = 0;

    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
        const li = document.createElement("li");
        li.innerHTML = `
            ${producto.nombre} - $${producto.precio.toFixed(2)} x ${producto.cantidad} 
            <button onclick="eliminarDelCarrito(${producto.id})">❌</button>
        `;
        carritoLista.appendChild(li);
    });

    totalTexto.textContent = `Total: $${total.toFixed(2)}`;
}

// Eliminar producto del carrito
function eliminarDelCarrito(id) {
    carrito = carrito.filter(producto => producto.id !== id);
    actualizarCarrito();
}

// Simular compra con loader
comprarBtn.addEventListener("click", () => {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    loader.classList.remove("oculto");
    setTimeout(() => {
        loader.classList.add("oculto");
        mensajeExito.classList.remove("oculto");
        carrito = [];
        actualizarCarrito();
    }, 5000);
});

// Cargar productos al inicio
cargarProductos();