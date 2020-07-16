export default function validarCrearCuenta(valores) {
    let errores = {};

    //Validar nombre
    if (!valores.nombre) {
        errores.nombre = "El nombre es obligatorio"
    }

    //Validar email
    if (!valores.email) {
        errores.email = "El email es obligatorio";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
        errores.email = "Email no válido";
    }

    //validar paassword
    if (!valores.password) {
        errores.password = "El password es oblgiatorio";
    } else if (valores.password.length < 6) {
        errores.password = "El password debe tener mínimo 6 caracteres";
    } else if (valores.password !== valores.confirmacionPassword) {
        errores.noRepitePassword = "Los password no coinciden";
    }

    // if (!valores.facultad || !valores.numLegajo) {
    //     errores.facultad = "Debe ingresar un legajo válido";
    // }

    if (!valores.acepta) {
        errores.acepta = "Debe aceptar los términos y condiciones";
    }



    return errores;
}
