export default function crearUsuario(dataUsuario) {
  fetch(`http://localhost:3000/tb_usuario`, {
    method: 'POST',
    body: JSON.stringify(dataUsuario),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}