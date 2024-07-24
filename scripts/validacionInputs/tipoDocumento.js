// Función para validar la opción elegida de tipo de documento
export default function validarTipoDocumento(inputTipoDocumento) {
  let _span = inputTipoDocumento.nextElementSibling;
  if (inputTipoDocumento.value === "Seleccione...") {
    inputTipoDocumento.classList.add("border-red-600", "border-2");
    // Si el <span> de error no existe o no es un <span>, créalo
    if (!_span) {
      _span = document.createElement("span");
      _span.textContent = "Seleccione un tipo de documento válido";
      _span.classList.add("text-red-600", "text-end", "text-sm");
      inputTipoDocumento.closest("div").appendChild(_span);
    };
    return false;
  } else {
    inputTipoDocumento.classList.remove("border-red-600", "border-2");
    if (_span) {
      _span.remove();
    };
    return true;
  }
};