async function cargarOrdenes() {
  const mensaje = document.getElementById('mensaje-actualizacion');
  const ahora = new Date().toLocaleTimeString();

  mensaje.textContent = `Actualizando... (${ahora})`;

  try {
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

    // Borra el mensaje después de 3 segundos
    setTimeout(() => {
      mensaje.textContent = '';
    }, 3000);
  } catch (error) {
    mensaje.textContent = 'Error al cargar órdenes.';
    console.error('Error al cargar órdenes:', error);
  }
}

// Ejecuta una vez al cargar la página
cargarOrdenes();

// Y luego cada 15 segundos
setInterval(cargarOrdenes, 15000);