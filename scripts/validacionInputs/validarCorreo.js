// Función para validar la legibilidad del correo
export default function validarCorreo(inputCorreo) {
  const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let _span = inputCorreo.nextElementSibling;
  if (!regexCorreo.test(inputCorreo.value) || inputCorreo.value === "") {
    inputCorreo.classList.add("border-red-600", "border-2");
    inputCorreo.classList.add("border-red-600", "border-2");
    // Si el <span> de error no existe o no es un <span>, créalo
    if (!_span) {
      _span = document.createElement("span");
      _span.textContent = "Correo inválido";
      _span.classList.add("text-red-600", "text-end", "text-sm");
      inputCorreo.closest("div").appendChild(_span);
    };
    return false;
  } else {
    inputCorreo.classList.remove("border-red-600", "border-2");
    // Si el <span> de error existe y es un <span>, elimínalo
    if (_span) {
      _span.remove();
    };
    return true;
  }
};