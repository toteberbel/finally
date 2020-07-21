import React, { useContext } from "react";
import styled from "@emotion/styled";
import Acordeon from "../ui/Acordion";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import BotonEliminar from "../ui/BotonEliminar";
import { FirebaseContext } from "../../fb";

const Contenedor = styled.div`
  border-radius: 1rem;
  i {
    color: #707070;
  }
  .fa-whatsapp {
    color: var(--amarillo1);
  }
  &:hover {
    -webkit-box-shadow: 3px 11px 39px 3px rgba(0, 0, 0, 0.71) !important;
    -moz-box-shadow: 3px 11px 39px 3px rgba(0, 0, 0, 0.71) !important;
    box-shadow: 3px 11px 39px 3px rgba(0, 0, 0, 0.71) !important;
  }
`;

const CardHead = styled.div`
  background: #00f260; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0575e6,
    #00f260
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0575e6,
    #00f260
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  height: 3rem;
`;

const CardBody = styled.div`
  background-color: #ffff;
  h1 {
    margin-bottom: 5px;
    color: var(--azul1);
  }
  h3 {
    margin: 0;
  }
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  .more {
    &:hover {
      cursor: pointer;
    }
  }
`;

const ContendorImagen = styled.div`
  width: 100%;
  height: auto;
  margin: 0.5rem 0;
  img {
    border-radius: 1rem;
    border: 1px solid #eaeaea;
  }
  @media (max-width: 576px) {
    img {
      width: 10rem;
      height: auto;
    }
  }
  @media (min-width: 576px) {
    img {
      width: 15rem;
      height: auto;
    }
  }
`;

const InputColapso = styled.a`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: small;
  border: 1px solid var(--azul1);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  &:hover {
    cursor: pointer;
    background-color: var(--azul1);
    color: #eaeaea;
  }
  background-color: transparent;
  color: var(--azul1);
  text-decoration: none !important;
`;

const CardClases = ({ anuncio, idUsuario }) => {
  const {
    titulo,
    ciudad,
    modalidad,
    creador: { nombre },
    creador: { id },
    descripcion,
    urlimagen,
    creado,
    telefono,
  } = anuncio;

  const { firebase } = useContext(FirebaseContext);

  return (
    <Contenedor className="row mb-5 shadow">
      <CardHead className="col-12"></CardHead>
      <CardBody className="col-12">
        <div className="row">
          <div className="col-7 col-md-8">
            <h1>{titulo}</h1>
            <h3>
              <i className="fas fa-user fa-sm mr-2"></i> {nombre}
            </h3>
            <h3 className="mb-2">
              <i className="fas fa-map-marker-alt fa-sm mr-3"></i>
              {ciudad}
            </h3>
            <div className="d-none d-md-block ">
              <h3>Acerca de esta clase:</h3>
              <p>{descripcion}</p>
            </div>
            <span className="d-block">Modalidad:</span>
            <span className="badge badge-pill badge-primary mb-3">
              {modalidad}
            </span>
            <small className="d-block mb-2">
              Publicado hace{" "}
              {formatDistanceToNow(new Date(creado), { locale: es })}
            </small>
          </div>
          <div className="col-5 col-md-4 mb-4 text-center pl-0">
            <ContendorImagen className="mb-4">
              {urlimagen === "" ? (
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/finally-8b306.appspot.com/o/imagenesDesarrollo%2FuserDefault.png?alt=media&token=cea35687-3df4-4c45-be26-4093f34ae20a"
                  alt="Imagen anuncio de clase"
                />
              ) : (
                <img src={urlimagen} alt="Imagen anuncio de clase" />
              )}
            </ContendorImagen>
            <InputColapso
              className="d-block"
              href={`https://wa.me/549${telefono}`}
            >
              <i className="fab fa-whatsapp fa-lg mr-1" /> Contactar profesor
            </InputColapso>
            {idUsuario === id && (
              <BotonEliminar
                onClick={() => firebase.borrarAnuncio(anuncio.id)}
                className=" mt-2 d-block"
              >
                <i className="far fa-trash-alt mr-2 "></i>Eliminar anuncio
              </BotonEliminar>
            )}
          </div>
          <div className="col-12 d-md-none mb-1">
            <Acordeon descripcion={descripcion} />
          </div>
        </div>
      </CardBody>
    </Contenedor>
  );
};

export default CardClases;
