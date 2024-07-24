export default function traerUsuario(idUsuario) {
  return fetch(`http://localhost:3000/tb_usuario/${idUsuario}`)
  .then((response) => response.json())
  .then((data) => console.log(data));
}