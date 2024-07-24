import eliminar from "../peticiones/eliminarUsuario.js";

export default function botonEliminar() {
  const deleteButtons = document.querySelectorAll(".fa-trash");
  deleteButtons.forEach(button => {
    const id = button.getAttribute('data-id');
    button.addEventListener("click", () => eliminar(id));
  });
};  