const productos = [
  { nombre: "Laptop", precio: 500, stock: 5 },
  { nombre: "Mouse", precio: 20, stock: 10 },
  { nombre: "Teclado", precio: 30, stock: 8 },
  { nombre: "Monitor", precio: 150, stock: 4 }
];

let carrito = [];


function agregarAlCarrito(nombreProducto, cantidad) {
  const producto = productos.find(p => p.nombre.toLowerCase() === nombreProducto.toLowerCase());

  if (!producto) {
      console.log("Producto no encontrado.");
      return;
  }

  if (producto.stock < cantidad) {
      console.log(`No hay suficiente stock de ${nombreProducto}.`);
      return;
  }

  carrito.push({ nombre: producto.nombre, precio: producto.precio, cantidad });
  producto.stock -= cantidad;
  console.log(`${cantidad} ${nombreProducto}(s) agregado(s) al carrito.`);
}


function calcularTotal() {
  return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
}


function aplicarDescuento(total) {
  return total > 100 ? total * 0.9 : total;
}


function procesarCompra() {
  console.log("Procesando compra...");

  setTimeout(() => {
      let total = calcularTotal();
      total = aplicarDescuento(total);
      console.log(`Compra completada. Total a pagar: $${total.toFixed(2)}`);
  }, 3000);
}


function eliminarDelCarrito(nombreProducto) {
  carrito = carrito.filter(item => item.nombre.toLowerCase() !== nombreProducto.toLowerCase());
  console.log(`Producto ${nombreProducto} eliminado del carrito.`);
}


function cuentaRegresiva() {
  let tiempo = 3;
  const intervalo = setInterval(() => {
      console.log(`Compra confirmada en... ${tiempo}`);
      tiempo--;

      if (tiempo < 0) {
          clearInterval(intervalo);
          procesarCompra();
      }
  }, 1000);
}


console.log("Bienvenido a la tienda. Usa las funciones en la consola:");
console.log("- agregarAlCarrito('nombre', cantidad)");
console.log("- calcularTotal()");
console.log("- procesarCompra()");
console.log("- cuentaRegresiva()");
console.log("- eliminarDelCarrito('nombre')");