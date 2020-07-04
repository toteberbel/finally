import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'
import firebaseConfig from './config';
import 'firebase/storage';
import Swal from 'sweetalert2';



class Firebase {
    constructor() {
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig);
            console.log(app.auth.GoogleAuthProvider)
        }
        this.auth = app.auth();
        this.db = app.firestore()
        this.storage = app.storage();
    }

    //Registra un usuario
    async registrar(email, password, nombre, facultad, numLegajo) {
        const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email, password);

        return await nuevoUsuario.user.updateProfile({
            displayName: nombre,
            numLegajo,
            facultad,
        });
    }

    //Louearse con google
    async loginGoogle() {

        const provider = await new app.auth.GoogleAuthProvider;
        console.log(provider);

        await app.auth().signInWithRedirect(provider);

    }



    // Iniciar sesión
    async login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    // Ciera la sesión
    async cerrarSesion() {
        await this.auth.signOut();
    }

    //Recuperar contraseña

    async recuperarContraseña(email) {
        await this.auth.sendPasswordResetEmail(email).then(function () {
            console.log("se envio el mail correctamente");
        }).catch(function (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                text: "Ha ocurrido un error, vuelve a intentar más tarde"
            })
        });
    }

}

const firebase = new Firebase();
export default firebase;