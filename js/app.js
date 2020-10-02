const formularioContacto = document.querySelector('#contacto');

eventListener();

function eventListener() {
    //cuando el formulario de crear. editar se ejecuta
    formularioContacto.addEventListener('submit', leerFormulario);
}

function leerFormulario(e) {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value,
        empresa = document.querySelector('#empresa').value,
        telefono = document.querySelector('#telefono').value,
        accion = document.querySelector('#accion').value;
    if (nombre === '' || empresa === '' || telefono === '') {
        //2 parametros: texto y clase

        mostrarNotificacion('Todos los campos son obligatorios', 'error');
    } else {
        //pasa validacion, crerar llamado a Ajax
        const infoContacto = new FormData();
        infoContacto.append('nombre', nombre);
        infoContacto.append('empresa', empresa);
        infoContacto.append('telefono', telefono);
        infoContacto.append('accion', accion);

        if (accion === 'crear') {
            insertarBD(infoContacto);
        } else {
            //editar el contacto
        }
    }
}
//Inserta en la base de datos via AJAX
function insertarBD(datos) {
    //lamado a ajax

    //crear 
    const xhr = new XMLHttpRequest();

    //abrir conexion
    xhr.open('POST', 'inc/modelos/modelo-contacto.php', true);

    //pasar los datos o leer la respuesta
    xhr.onload = function() {
        if (this.status === 200) {

            //leemos la respuesta de php
            const respuesta = JSON.parse(xhr.responseText);

            //inserta nuevos elementos a la tabla

            const nuevoContacto = document.createElement('tr');
            nuevoContacto.innerHTML = `
            <td>${respuesta.datos.nombre}</td>
            <td>${respuesta.datos.empresa}</td>
            <td>${respuesta.datos.telefono}</td>
            `;
            //crear contenedor para los botones
            const contenedorAcciones = document.createElement('td');

            //crear el icono de editar

        }
    }

    //enviar los daots
    xhr.send(datos);
}



//notificacion  en pantalla

function mostrarNotificacion(mensaje, clase) {
    const notificacion = document.createElement('div');
    notificacion.classList.add(clase, 'notificacion', 'sombra')
    notificacion.textContent = mensaje;

    //formulario 
    formularioContacto.insertBefore(notificacion, document.querySelector('form legend'));

    //ocultar y mostrar la opcion
    setTimeout(() => {
        notificacion.classList.add('visible');
        setTimeout(() => {
            notificacion.classList.remove('visible');
            setTimeout(() => {
                notificacion.remove();
            }, 500)
        }, 3000);
    }, 100);
}