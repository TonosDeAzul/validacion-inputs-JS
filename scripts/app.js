import evitarLetras from "./validacionInputs/evitarLetras.js";
import evitarNumeros from "./validacionInputs/evitarNumeros.js";
import longitudMaxima from "./validacionInputs/longitudMaxima.js";
import longitudMinima from "./validacionInputs/longitudMinima.js";
import validarCorreo from "./validacionInputs/validarCorreo.js";
import tipoDocumento from "./validacionInputs/tipoDocumento.js";
import crearUsuario from "./peticiones/crearUsuario.js";


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

// Evitar carácteres
evitarNumeros(_nombre);
evitarNumeros(_apellidos);
evitarLetras(_telefono);
evitarLetras(_documento);

// Longitud máxima
longitudMaxima(_nombre, 100);
longitudMaxima(_apellidos, 100);
longitudMaxima(_telefono, 10);
longitudMaxima(_direccion, 100);
longitudMaxima(_documento, 10);
longitudMaxima(_correo, 100);


_form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Longgitud mínima
  const longitudMinimaNombre = longitudMinima(_nombre, 3);
  const longitudMinimaApellidos = longitudMinima(_apellidos, 3);
  const longitudMinimaTelefono = longitudMinima(_telefono, 10);
  const longitudMinimaDireccion = longitudMinima(_direccion, 5);
  const longitudMinimaDocumento = longitudMinima(_documento, 8);
  const longitudMinimaCorreo = longitudMinima(_correo, 5);

  // Validación inputs
  const validacionCorreo = validarCorreo(_correo);
  const validacionTipoDocumento = tipoDocumento(_tDocumento);

  // Validar que todos los campos cumplan con los requisitos
  if
    (
    !longitudMinimaNombre || !longitudMinimaApellidos ||
    !longitudMinimaTelefono || !longitudMinimaDireccion ||
    !longitudMinimaDocumento || !longitudMinimaCorreo ||
    !validacionCorreo || !validacionTipoDocumento
  ) { return; };

  // Verificar si el checkbox de políticas está marcado
  if (!_politicas.checked) {
    event.preventDefault(); // Evitar el envío del formulario
    return;
  } else {
    const data = {
      nombre: _nombre.value,
      apellidos: _apellidos.value,
      telefono: _telefono.value,
      direccion: _direccion.value,
      tipoDocumento: _tDocumento.value,
      documento: _documento.value,
      correo: _correo.value,
    };
    crearUsuario(data);
    // Borrar datos cuando el usuario sea creado
    _form.reset();
  };
});