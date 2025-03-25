const productos = [
  { nombre: "Laptop", precio: 500, stock: 5 },
  { nombre: "Mouse", precio: 20, stock: 10 },
  { nombre: "Teclado", precio: 30, stock: 8 },
  { nombre: "Monitor", precio: 150, stock: 4 }
];

let carrito = [];

// Renderiza los productos en la página
function mostrarProductos() {
  const productosDiv = document.getElementById("productos");
  productosDiv.innerHTML = "";

  productos.forEach((producto, index) => {
      const productoElemento = document.createElement("div");
      productoElemento.classList.add("producto");
      productoElemento.innerHTML = `
          <h3>${producto.nombre}</h3>
          <p>Precio: $${producto.precio}</p>
          <p>Stock: ${producto.stock}</p>
          <button onclick="agregarAlCarrito(${index})">Agregar al Carrito</button>
      `;
      productosDiv.appendChild(productoElemento);
  });
}

// Agrega productos al carrito
function agregarAlCarrito(index) {
  const producto = productos[index];

  if (producto.stock > 0) {
      const itemEnCarrito = carrito.find(item => item.nombre === producto.nombre);

      if (itemEnCarrito) {
          itemEnCarrito.cantidad++;
      } else {
          carrito.push({ nombre: producto.nombre, precio: producto.precio, cantidad: 1 });
      }

      producto.stock--;
      actualizarCarrito();
      mostrarProductos();
  } else {
      alert("No hay suficiente stock disponible.");
  }
}

// Actualiza el carrito en pantalla
function actualizarCarrito() {
  const carritoLista = document.getElementById("carrito-lista");
  carritoLista.innerHTML = "";

  carrito.forEach((item, index) => {
      const itemElemento = document.createElement("li");
      itemElemento.innerHTML = `
          ${item.nombre} - $${item.precio} x ${item.cantidad}
          <button onclick="quitarDelCarrito(${index})">-</button>
      `;
      carritoLista.appendChild(itemElemento);
  });

  const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
  document.getElementById("total").textContent = total.toFixed(2);
}

// Quita un producto del carrito
function quitarDelCarrito(index) {
  const item = carrito[index];
  const producto = productos.find(p => p.nombre === item.nombre);

  if (item.cantidad > 1) {
      item.cantidad--;
  } else {
      carrito.splice(index, 1);
  }

  producto.stock++;
  actualizarCarrito();
  mostrarProductos();
}

// Simula la compra con un loader
function procesarCompra() {
  if (carrito.length === 0) {
      alert("El carrito está vacío.");
      return;
  }

  document.getElementById("loader").classList.remove("oculto");
  document.getElementById("comprar-btn").disabled = true;

  setTimeout(() => {
      document.getElementById("loader").classList.add("oculto");
      alert("Compra completada. Gracias por tu compra.");
      carrito = [];
      actualizarCarrito();
      mostrarProductos();
      document.getElementById("comprar-btn").disabled = false;
  }, 5000);
}

document.getElementById("comprar-btn").addEventListener("click", procesarCompra);

// Inicializa la tienda
mostrarProductos();