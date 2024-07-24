import { _listar, _tbody } from "../listar.js";

// Crear tabla para almacenar usuarios
export default function crearTablaUsuario(element) {
  const _d = document;

  const _tr = _d.createElement("tr");
  _tr.classList.add("hover", "text-center");
  _tbody.appendChild(_tr);

  const _thId = _d.createElement("th");
  _thId.classList.add("font-light");
  _thId.textContent = element.id;
  // _thId.setAttribute("value", element.id);
  _tr.appendChild(_thId);

  const _thNombre = _d.createElement("th");
  _thNombre.classList.add("font-light");
  _thNombre.textContent = element.nombre;
  _tr.appendChild(_thNombre);

  const _thApellidos = _d.createElement("th");
  _thApellidos.classList.add("font-light");
  _thApellidos.textContent = element.apellidos;
  _tr.appendChild(_thApellidos);

  const _thDocumento = _d.createElement("th");
  _thDocumento.classList.add("font-light");
  _thDocumento.textContent = element.documento;
  _tr.appendChild(_thDocumento);

  const _thTipoDocumento = _d.createElement("th");
  _thTipoDocumento.classList.add("font-light");
  _thTipoDocumento.textContent = element.tipoDocumento;
  _tr.appendChild(_thTipoDocumento);

  const _thCorreo = _d.createElement("th");
  _thCorreo.classList.add("font-light");
  _thCorreo.textContent = element.correo;
  _tr.appendChild(_thCorreo);

  const _thDireccion = _d.createElement("th");
  _thDireccion.classList.add("font-light");
  _thDireccion.textContent = element.direccion;
  _tr.appendChild(_thDireccion);

  const _thAcciones = _d.createElement("th");
  _tr.appendChild(_thAcciones);

  const _buttonEliminar = _d.createElement("button");
  _buttonEliminar.classList.add("fa-solid", "fa-trash", "mr-2");
  _buttonEliminar.setAttribute('data-id', element.id);
  _thAcciones.appendChild(_buttonEliminar);

  const _buttonEditar = _d.createElement("button");
  _buttonEditar.classList.add("fa-solid", "fa-pen");
  _buttonEditar.setAttribute('data-id', element.id);
  _thAcciones.appendChild(_buttonEditar);
};