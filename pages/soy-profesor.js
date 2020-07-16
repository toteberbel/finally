import React, { useState, useContext } from "react";
import Layout from "../components/layout/Layout";
import Error from "../components/ui/Error";
import styled from "@emotion/styled";
import validarCrearAnuncio from "../validacion/validarCrearAnuncio";
import FileUploader from "react-firebase-file-uploader";
import { FirebaseContext } from "../fb";
import Swal from "sweetalert2";
import Router from "next/router";

const ContenedorPpal = styled.div`
  border: 1px solid var(--amarillo1);
  padding: 2rem;
  border-radius: 1rem;
  margin-top: 5rem;
  input {
    width: 100%;
  }
  h1 {
    color: var(--amarillo1);
  }
  label {
    color: var(--amarillo1);
    font-weight: bold;
    display: inline-block;
    padding: 0.2rem;
  }
  i {
    color: #212529;
  }
`;

const Input = styled.input`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  border: 1px solid #0b3c5d;
  padding: 0.8rem 2rem;

  background-color: #0b3c5d;
  color: #eaeaea;
  font-size: medium;
  border-radius: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

const SoyProfe = () => {
  const { usuario, firebase } = useContext(FirebaseContext);

  //State de las imagenes
  const [nombreimagen, guardarNombre] = useState("");
  const [subiendo, guardarSubiendo] = useState(false);
  const [progreso, guardarProgreso] = useState(0);
  const [urlimagen, guardarUrlImagen] = useState("");

  const [datosclase, guardarDatosClase] = useState({
    titulo: "",
    descripcion: "",
    ciudad: "",
    modalidad: "",
    telefono: "",
    imagen: null,
  });

  const [errorvalidacion, guardarErrorValidacion] = useState({});

  const { titulo, descripcion, ciudad, modalidad, telefono } = datosclase;

  const handleChange = (e) => {
    guardarDatosClase({
      ...datosclase,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var erroresValidacion = validarCrearAnuncio(datosclase); //Esta funcion me retorna un objeto con los posibles errores si los hay
    const noErrores = Object.keys(erroresValidacion).length === 0; //noErrores seria true o false

    if (!noErrores) {
      guardarErrorValidacion(erroresValidacion);
      return;
    }
    guardarErrorValidacion({});

    const anuncio = {
      titulo,
      descripcion,
      ciudad,
      modalidad,
      urlimagen,
      telefono,
      creado: Date.now(),
      creador: {
        id: usuario.uid,
        nombre: usuario.displayName,
      },
    };

    firebase.db.collection("anuncios").add(anuncio);

    Swal.fire({
      icon: "success",
      title: "Tu anuncio ha sido publicado exitosamente!",
    });

    Router.push("/buscar-profesor");
  };

  const handleUploadStart = () => {
    guardarProgreso(0);
    guardarSubiendo(true);
  };

  const handleProgress = (progreso) => guardarProgreso({ progreso });

  const handleUploadError = (error) => {
    guardarSubiendo(error);
    Swal.fire({
      icon: "error",
      title:
        "Hubo un error al subir este archivo, inenta nuevamente o prueba con otro formato",
    });
  };

  const handleUploadSuccess = (titulo) => {
    guardarProgreso(100);
    guardarSubiendo(false);
    guardarNombre(titulo);
    firebase.storage
      .ref("anuncios")
      .child(titulo)
      .getDownloadURL()
      .then((url) => {
        console.log(url);
        guardarUrlImagen(url);
      });
  };

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-11 mb-5">
            <ContenedorPpal className="mb-5">
              <h1 className="text-center mb-1">Publica tu clase</h1>
              <div className="text-center mb-4">
                <span>Los campos que contienen un * son obligatorios</span>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="titulo"> Título de tu clase: </label>*
                  <input
                    name="titulo"
                    type="text"
                    placeholder="Ej: Análisis Matemático"
                    className="form-control d-block"
                    maxLength="35"
                    onChange={handleChange}
                    value={titulo}
                  />
                  <small>Tema principal que enseñas.</small>
                  {errorvalidacion.titulo && (
                    <Error msg={errorvalidacion.titulo} />
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="descripcion">
                    Breve descripción de lo que enseñas:
                  </label>
                  *
                  <textarea
                    id="descripcion"
                    name="descripcion"
                    className="d-block form-control"
                    onChange={handleChange}
                    value={descripcion}
                  ></textarea>
                  <small>
                    Puedes presentarte y/o expandir acerca de lo que enseñas.
                  </small>
                  {errorvalidacion.descripcion && (
                    <Error msg={errorvalidacion.descripcion} />
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="ciudad"> Ciudad donde dictas clase: </label>*
                  <input
                    id="ciudad"
                    type="text"
                    name="ciudad"
                    placeholder="Ej: Cipolletti - Neuquén - Roca"
                    className="form-control d-block"
                    onChange={handleChange}
                    value={ciudad}
                  />
                  <small>Puedes poner más de una ciudad</small>
                  {errorvalidacion.ciudad && (
                    <Error msg={errorvalidacion.ciudad} />
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="modalidad">Modalidad de la clase:</label>*
                  <select
                    name="modalidad"
                    className="d-block form-control"
                    onChange={handleChange}
                    value={modalidad}
                  >
                    <option value="">-- Seleccione --</option>
                    <option value="Virtual">Virtual</option>
                    <option value="Presencial">Presencial</option>
                    <option value="A elección del estudiante">
                      A eleccion del estudiante
                    </option>
                  </select>
                  {errorvalidacion.modalidad && (
                    <Error msg={errorvalidacion.modalidad} />
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="telefono">
                    Teléfono de contacto:
                    <small className="d-block">Sin 0 y sin el 15 </small>
                    <input
                      type="number"
                      name="telefono"
                      className="form-control d-block"
                      placeholder="Ej: 2995232100"
                      value={telefono}
                      onChange={handleChange}
                    />
                  </label>
                  {errorvalidacion.telefono && (
                    <Error msg={errorvalidacion.telefono} />
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="imagen">
                    Incluye una foto a tu anuncio (Opcional)
                  </label>
                  {/* <input id="imagen" name="imagen" type="file" /> */}
                  <FileUploader
                    accept="image/*" //Significa que soporta imagenes de cualquier formato
                    id="imagen"
                    name="imagen"
                    randomizeFilename
                    storageRef={firebase.storage.ref("anuncios")}
                    onUploadStart={handleUploadStart}
                    onUploadError={handleUploadError}
                    onUploadSuccess={handleUploadSuccess}
                    onProgress={handleProgress}
                  />

                  {subiendo && (
                    <div className="alert alert-primary mt-2" role="alert">
                      <span>Tu imagen se está subiendo...</span>

                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="sr-only ml-5 ">Loading...</span>
                      </div>
                    </div>
                  )}

                  {progreso === 100 ? (
                    <div className="alert alert-success mt-2" role="alert">
                      Tu imagen se ha cargado correctamente
                    </div>
                  ) : null}
                  <small>
                    <i className="far fa-lightbulb"></i> Si incluyes una foto
                    tuya a tu anuncio tendrás más probabilidades de ser
                    contactado.
                  </small>
                </div>
                <Input
                  type="submit"
                  value="Publicar mi clase"
                  className="mt-5 mb-3"
                />
              </form>
            </ContenedorPpal>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SoyProfe;
