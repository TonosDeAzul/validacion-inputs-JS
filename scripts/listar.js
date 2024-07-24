import agregarUsuario from "./listar/crearTabla.js";
import listar from "./peticiones/listarUsuarios.js";
import eliminar from "./listar/botonEliminar.js";
import editar from "./listar/botonEditar.js";

// Document
const _d = document;
// Tabla listar
export const _listar = _d.getElementById("listar");
// Table Body
export const _tbody = _d.getElementById("tbody");

listar().then((usuarios) => {
  // _tbody.innerHTML = '';
  usuarios.forEach(usuario => {
    agregarUsuario(usuario);
  });
  eliminar();
  editar();
});