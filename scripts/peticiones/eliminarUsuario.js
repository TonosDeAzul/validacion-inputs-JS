export default function eliminarUsario(idUsuario) {
  fetch(`http://localhost:3000/tb_usuario/${idUsuario}`, {
    method: 'DELETE',
  });
}