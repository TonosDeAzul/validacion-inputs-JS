// Función para verificar la longitud
export default function longitudMinima(input, minimo) {
  let _span = input.nextElementSibling;
  if (input.value.length < minimo) {
    // input.closest("label").classList.add("border-red-600", "border-2");
    input.classList.add("border-red-600", "border-2");
    // Si el <span> de error no existe o no es un <span>, créalo
    if (!_span) {
      _span = document.createElement("span");
      _span.textContent = "Cantidad de carácteres inválida";
      _span.classList.add("text-red-600", "text-end", "text-sm");
      input.closest("div").appendChild(_span);
    };
    return false;
  } else {
    input.classList.remove("border-red-600", "border-2");
    // Si el <span> de error existe y es un <span>, elimínalo
    if (_span) {
      _span.remove();
    };
    return true;
  };
};