export default function listarUsuario() {
  return fetch(`http://localhost:3000/tb_usuario`)
    .then((response) => response.json())
    .then((data) => data);
};
