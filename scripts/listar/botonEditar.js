import modalEditar from "../actualizar/formActualizar.js";

export default function botonEditar() {
  const editButtons = document.querySelectorAll(".fa-pen");
  editButtons.forEach(button => {
    const id = button.getAttribute('data-id');
    button.addEventListener("click", () => modalEditar(id));
  });
};