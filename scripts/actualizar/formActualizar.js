import traerUsuario from "../peticiones/traerUsuario.js";
import editarUsuario from "../peticiones/editarUsuario.js";
import evitarLetras from "../validacionInputs/evitarLetras.js";
import evitarNumeros from "../validacionInputs/evitarNumeros.js";
import longitudMaxima from "../validacionInputs/longitudMaxima.js";
import longitudMinima from "../validacionInputs/longitudMinima.js";
import validarCorreo from "../validacionInputs/validarCorreo.js";
import tipoDocumento from "../validacionInputs/tipoDocumento.js";

function crearInput(form, inputName, valorInput) {
  const _d = document;
  const _div = _d.createElement("div");
  _div.classList.add("grid", "text-lg", "gap-1");
  form.appendChild(_div);
  const _label = _d.createElement("label");
  _label.textContent = inputName;
  _label.classList.add("text-sm", "capitalize");
  _label.setAttribute("for", inputName);
  _div.appendChild(_label);
  const _input = _d.createElement("input");
  _input.classList.add("input", "input-bordered", "w-full");
  _input.id = inputName;
  _input.type = "text";
  _input.value = valorInput;
  _div.appendChild(_input);
};

function crearSelect(form) {
  const _d = document;
  const _div = _d.createElement("div");
  _div.classList.add("grid", "text-lg", "gap-1");
  form.appendChild(_div);
  const _label = _d.createElement("label");
  _label.textContent = "Tipo de documento";
  _label.classList.add("text-sm", "capitalize");
  _label.setAttribute("for", "tipoDocumento");
  _div.appendChild(_label);
  const _select = _d.createElement("select");
  _select.id = "tipoDocumento";
  _select.classList.add("input", "input-bordered", "w-full");
  _div.appendChild(_select);
  const _option1 = _d.createElement("option");
  _option1.value = "Seleccione...";
  _option1.textContent = "Seleccione...";
  _select.appendChild(_option1);
  const _option2 = _d.createElement("option");
  _option2.value = "CC";
  _option2.textContent = "CC";
  _select.appendChild(_option2);
  const _option3 = _d.createElement("option");
  _option3.value = "TI";
  _option3.textContent = "TI";
  _select.appendChild(_option3);
};

export default function modalEditar(idUsuario) {
  const _d = document;
  const _body = _d.body;
  const _section = _d.createElement("section");
  _section.classList.add(
    "flex",
    "bg-[#1D1D1D60]",
    "fixed",
    "min-h-screen",
    "w-full",
    "justify-center",
    "items-center"
  );
  _body.appendChild(_section);
  const _form = _d.createElement("form");
  _form.classList.add(
    "text-white",
    "flex",
    "w-96",
    "gap-2",
    "flex-col",
    "p-5",
    "shadow-lg",
    "rounded-lg",
    "bg-black"
  );
  _section.appendChild(_form);

  traerUsuario(idUsuario).then(usuario => {
    // console.log(data);
    crearInput(_form, "nombre", usuario.nombre);
    crearInput(_form, "apellidos", usuario.apellidos);
    crearInput(_form, "telefono", usuario.telefono);
    crearInput(_form, "direccion", usuario.direccion);
    crearSelect(_form);
    _d.getElementById("tipoDocumento").value = usuario.tipoDocumento;
    crearInput(_form, "documento", usuario.documento);
    crearInput(_form, "correo", usuario.correo);
    const _nombre = _d.getElementById("nombre");
    const _apellidos = _d.getElementById("apellidos");
    const _telefono = _d.getElementById("telefono");
    const _documento = _d.getElementById("documento");
    const _direccion = _d.getElementById("direccion");
    const _correo = _d.getElementById("correo");
    const _tDocumento = _d.getElementById("tipoDocumento");
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
    const _button = _d.createElement("button");
    _button.type = "submit";
    _button.textContent = "Actualizar";
    _button.classList.add("btn", "w-full", "bg-neutral-900", "text-white");
    _form.appendChild(_button);
    _button.addEventListener("click", (event) => {
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
      const newData = {
        nombre: _nombre.value,
        apellidos: _apellidos.value,
        telefono: _telefono.value,
        direccion: _direccion.value,
        tipoDocumento: _tDocumento.value,
        documento: _documento.value,
        correo: _correo.value,
      };
      editarUsuario(usuario.id, newData)
      // Borrar datos cuando el usuario sea creado
      _form.reset();
    })
  });
};