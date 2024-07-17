import { 
  evitarNumeros, 
  evitarLetras, 
  longitud, 
  validarCorreo, 
  validarTipoDocumento } from "./validacion.js";

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

evitarNumeros(_nombre);
evitarNumeros(_apellidos);
evitarLetras(_telefono);
evitarLetras(_documento);

_form.addEventListener("submit", (event) => {
  const longintudNombre = longitud(_nombre, 3, 30);
  const longintudApellidos = longitud(_apellidos, 3, 30);
  const longintudTelefono = longitud(_telefono, 10, 10);
  const longintudDireccion = longitud(_direccion, 10, 30);
  const longitudDocumento = longitud(_documento, 8, 10);
  const logintudCorreo = longitud(_correo, 10, 30);
  validarTipoDocumento();
  event.preventDefault();

  // Si todas las validaciones son correctas, enviar el formulario
  if (
    validarCorreo() &&
    longintudNombre &&
    longintudApellidos &&
    longintudTelefono &&
    longintudDireccion &&
    longitudDocumento &&
    logintudCorreo &&
    validarTipoDocumento()
  ) {
    // Verificar si el checkbox de políticas está marcado
    if (!_politicas.checked) {
      event.preventDefault(); // Evitar el envío del formulario
      return;
    } else {
      // Enviar el formulario
      _form.submit();
    }
  }
});