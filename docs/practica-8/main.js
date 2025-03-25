document.getElementById("registroForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío del formulario si hay errores

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  let valid = true;

  // Validación de Nombre (solo letras y espacios)
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(nombre) || nombre === "") {
      mostrarError("error-nombre", "Ingrese un nombre válido.");
      valid = false;
  } else {
      ocultarError("error-nombre");
  }

  // Validación de Correo Electrónico
  if (!/^\S+@\S+\.\S+$/.test(email)) {
      mostrarError("error-email", "Ingrese un correo válido.");
      valid = false;
  } else {
      ocultarError("error-email");
  }

  // Validación de Contraseña (mínimo 8 caracteres, al menos 1 mayúscula, 1 minúscula, 1 número y 1 símbolo)
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password)) {
      mostrarError("error-password", "La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo.");
      valid = false;
  } else {
      ocultarError("error-password");
  }

  // Confirmación de Contraseña
  if (password !== confirmPassword) {
      mostrarError("error-confirmPassword", "Las contraseñas no coinciden.");
      valid = false;
  } else {
      ocultarError("error-confirmPassword");
  }

  if (valid) {
      simularEnvio();
  }
});

// Función para mostrar errores
function mostrarError(id, mensaje) {
  const elemento = document.getElementById(id);
  elemento.textContent = mensaje;
}

// Función para ocultar errores
function ocultarError(id) {
  const elemento = document.getElementById(id);
  elemento.textContent = "";
}

// Función para simular el envío con un loader
function simularEnvio() {
  document.getElementById("loader").classList.remove("oculto");

  setTimeout(() => {
      document.getElementById("loader").classList.add("oculto");
      document.getElementById("mensaje-exito").classList.remove("oculto");
  }, 5000);
}