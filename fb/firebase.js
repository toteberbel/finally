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
    async registrar(email, password, nombre) {
        const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email, password);

        return await nuevoUsuario.user.updateProfile({
            displayName: nombre,
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

    //Borrar anuncio
    borrarAnuncio(id) {
        Swal.fire({
            title: 'Estás seguro que quieres eliminar este anuncio?',
            text: "No podrás revertir esta acción",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.value) {
                try {
                    await firebase.db.collection('anuncios').doc(id).delete();

                    Swal.fire(
                        'Eliminado!',
                        'Tu anuncio ha sido eliminado!',
                        'success'
                    )
                } catch (error) {
                    Swal.fire(
                        'Ops!',
                        'Ha ocurrido un error, intenta nuevamente',
                        'error'
                    )
                }

            }
        })
    }

}

const firebase = new Firebase();
export default firebase;