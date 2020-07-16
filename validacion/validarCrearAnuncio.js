export default function validarCrearAnuncio(datos) {
    let errores = {
    };

    if (datos.telefono === 0) {
        errores.telefono = "Debes añadir un teléfono para que puedan contactarte"
    }

    if (datos.titulo === "") {
        errores.titulo = "Tu clase debe tener un título";
    }
    if (datos.ciudad === "") {
        errores.ciudad = "Debes indicar la ciudad donde darás clases";
    }

    if (datos.descripcion === "") {
        errores.descripcion = "Debes añadir una breve descripción";
    }

    if (datos.modalidad === "") {
        errores.modalidad = "Debes seleccionar una modalidad";
    }

    return errores;
}