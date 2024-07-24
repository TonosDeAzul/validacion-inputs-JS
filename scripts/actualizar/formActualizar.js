import traerUsuario from "../peticiones/traerUsuario.js";

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

  traerUsuario(idUsuario);

  crearInput(_form, "nombre");
  crearInput(_form, "apellidos");
  crearInput(_form, "teléfono");
  crearInput(_form, "dirección");
  crearSelect(_form);
  crearInput(_form, "documento");
  crearInput(_form, "correo");

  const _button = _d.createElement("button");
  _button.type = "submit";
  _button.textContent = "Actualizar";
  _button.classList.add("btn", "w-full", "bg-neutral-900", "text-white");
  _form.appendChild(_button);
};