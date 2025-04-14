async function cargarOrdenes() {
  const respuesta = await fetch('/api/ordenes');
  const ordenes = await respuesta.json();

  const tbody = document.querySelector('#tabla-ordenes tbody');
  tbody.innerHTML = '';

  ordenes.forEach(orden => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${orden.id}</td>
      <td>${orden.nombre_usuario}</td>
      <td>${orden.telefono}</td>
      <td>${orden.extension || '-'}</td>
      <td>${orden.email}</td>
      <td>${orden.oficina}</td>
      <td>${orden.descripcion}</td>
      <td>${new Date(orden.fecha_creacion).toLocaleString()}</td>
    `;
    tbody.appendChild(fila);
  });
}

cargarOrdenes();
