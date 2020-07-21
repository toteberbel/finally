import React, { useContext } from "react";
import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";
import Boton from "../components/ui/Boton";
import { FirebaseContext } from "../fb";
import Link from "next/link";

const Contenedor = styled.div`
  h1 {
    color: var(--azul1);
  }
  .fa-check {
    color: var(--amarillo1);
  }
  .fa-paper-plane {
    color: #eaeaea;
  }
  p {
    font-size: 2rem;
    color: var(--azul1);
    span {
      padding: 0rem 0.5rem;
      background-color: var(--amarillo1);
      color: var(--azul1);
    }
  }

  img {
    max-width: 600px;
  }
`;

const SoyProfesor = () => {
  const { usuario } = useContext(FirebaseContext);
  return (
    <Layout>
      <Contenedor className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-11 alert alert-success  mt-5 mb-5 text-center ">
            <h1 className="mt-4">
              <i className="fas fa-check fa-lg mr-2"></i> ¿Sos bueno en una
              materia y te gustaría enseñar?
            </h1>
            <h1>
              <i className="fas fa-check fa-lg mr-2"></i> ¿Sos profesor?
            </h1>
            <img
              className="img-fluid mt-4 mb-4"
              alt="Ilustracion de un profesor"
              src="https://firebasestorage.googleapis.com/v0/b/finally-8b306.appspot.com/o/imagenesDesarrollo%2FGrupo%20167.png?alt=media&token=158c9649-2113-4ffb-a759-af3bb941dad5"
            />
            <p className="text-center">
              <b>
                Entonces publica tu anuncio <span>totalmente gratis</span> y
                espera a ser contactado por unx de los miles estudiantes que
                buscan aprobar sus materias.
              </b>
            </p>
            <div className="text-center mt-5 mb-4">
              {usuario ? (
                <Link href="/publicar-anuncio">
                  <Boton href="!#" bgColor="true">
                    <i className="fas fa-paper-plane mr-3"></i> Publicar mi
                    anuncio
                  </Boton>
                </Link>
              ) : (
                <Boton
                  href="!#"
                  bgColor="true"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  <i className="fas fa-paper-plane mr-3"></i>Publicar mi anuncio
                </Boton>
              )}
            </div>
          </div>
        </div>
      </Contenedor>
    </Layout>
  );
};

export default SoyProfesor;
