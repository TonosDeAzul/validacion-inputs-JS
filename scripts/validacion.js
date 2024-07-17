const _d = document;

// Formulario
const _form = _d.getElementById("form");

// Inputs
const _nombre = _d.getElementById("nombre");
const _apellidos = _d.getElementById("apellidos");
const _telefono = _d.getElementById("telefono");
const _direccion = _d.getElementById("direccion");
const _tDocumento = _d.getElementById("tipoDocumento");
const _documento = _d.getElementById("documento");
const _correo = _d.getElementById("correo");
const _politicas = _d.getElementById("politicas");

// Función para evitar que se escriban números
export const evitarNumeros = (input) => {
  // Variable para almacenar la referencia al elemento de error
  let _span;
  input.addEventListener("keypress", (event) => {
    const regexLetras = /^[a-zA-ZàáâãéêíóôõúüñÑ $]/;
    // Si ya existe el mensaje de error, lo elimina
    if (_span) {
      _span.remove();
      _span = null;
    }
    if (!regexLetras.test(event.key)) {
      event.preventDefault();
      // Crear y mostrar el mensaje de error
      _span = _d.createElement("span");
      _span.textContent = "Solo se permiten letras";
      _span.classList.add("text-red-600");
      input.closest("div").appendChild(_span);
    };
  });
  input.addEventListener("blur", () => {
    // Eliminar el mensaje de error cuando se pierde el foco
    if (_span) {
      _span.remove();
      _span = null;
    }
  });
};

// const evitarNumeros = (input) => {
//   // Variable para almacenar la referencia al elemento de error
//   let _span;
//   input.addEventListener("focus", () => {
//     // Crear y mostrar el mensaje de error
//     _span = document.createElement("span");
//     _span.textContent = "Solo se permiten letras";
//     _span.classList.add("text-red-600");
//     input.closest("div").appendChild(_span);
//   });
//   input.addEventListener("keypress", (event) => {
//     const regexLetras = /^[a-zA-ZàáâãéêíóôõúüñÑ $]/;
//     if (!regexLetras.test(event.key)) {
//       event.preventDefault();
//       // ... (Rest of the keypress event handler logic)
//     }
//   });
//   input.addEventListener("blur", () => {
//     // Eliminar el mensaje de error cuando se pierde el foco
//     if (_span) {
//       _span.remove();
//       _span = null;
//     }
//   });
// };

// Función para evitar que se escriban letras
export const evitarLetras = (input) => {
  // Variable para almacenar la referencia al elemento de error
  let _span;
  input.addEventListener("keypress", (event) => {
    const regexLetras = /^[0-9$]/;
    // Si ya existe el mensaje de error, lo elimina
    if (_span) {
      _span.remove();
      _span = null;
    }
    if (!regexLetras.test(event.key)) {
      event.preventDefault();
      // Crear y mostrar el mensaje de error
      _span = _d.createElement("span");
      _span.textContent = "Solo se permiten números";
      _span.classList.add("text-red-600");
      input.closest("div").appendChild(_span);
    };
  });
  input.addEventListener("blur", () => {
    // Eliminar el mensaje de error cuando se pierde el foco
    if (_span) {
      _span.remove();
      _span = null;
    }
  });
};

// Función para validar la longitud mínima y máxima
export const longitud = (input, minima, maxima) => {
  // Busca el span existente
  let _span = input.closest("div").querySelector("span");
  if (input.value.length < minima || input.value.length > maxima) {
    input.classList.remove("border-green-600", "border-2");
    input.classList.add("border-red-600", "border-2");
     // Solo crea el span si no existe
    if (!_span) {
      _span = document.createElement("span");
      _span.textContent = "Cantidad de caráctres inválida";
      _span.classList.add("text-red-600");
      input.closest("div").appendChild(_span);
    }
    return false;
  } else {
    input.classList.remove("border-red-600", "border-2");
    input.classList.add("border-green-600", "border-2");
     // Elimina el span si existe
    if (_span) {
      _span.remove();
    }
    return true;
  }
}


// Función para validar la legibilidad del correo
export const validarCorreo = () => {
  const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regexCorreo.test(_correo.value) || _correo.value === "") {
    _correo.classList.remove("border-green-600", "border-2");
    _correo.classList.add("border-red-600", "border-2");
    return false;
  } else {
    _correo.classList.remove("border-red-600", "border-2");
    _correo.classList.add("border-green-600", "border-2");
    return true;
  }
};

// Función para validar la opción elegida de tipo de documento
export const validarTipoDocumento = () => {
  if (_tDocumento.value === "Seleccione...") {
    _tDocumento.classList.remove("border-green-600", "border-2");
    _tDocumento.classList.add("border-red-600", "border-2");
    return false;
  } else {
    _tDocumento.classList.remove("border-red-600", "border-2");
    _tDocumento.classList.add("border-green-600", "border-2");
    return true;
  }
};