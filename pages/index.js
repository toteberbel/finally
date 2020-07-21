import React, { useContext } from "react";
import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";
import Link from "next/link";
import Boton from "../components/ui/Boton";
import { FirebaseContext } from "../fb/index";

const FirstContenedor = styled.div`
  background-image: url("https://firebasestorage.googleapis.com/v0/b/finally-8b306.appspot.com/o/imagenesDesarrollo%2FGrupo%20173.png?alt=media&token=7ec36f8f-9569-4265-87f3-80f4e9bed4a7");
  min-height: 44vh;

  i {
    margin-right: 5px !important;
    color: var(--amarillo1);
  }

  .fa-whatsapp {
    font-weight: 500;
  }

  .fa-chalkboard-teacher {
    margin-right: 10px !important;
  }

  @media (max-width: 450px) {
    background-size: 32rem 29rem;
    background-repeat: no-repeat;
    background-position: left bottom;
  }
  @media (min-width: 450px) {
    background-size: 80rem 70rem;
    background-repeat: no-repeat;
    background-position: left bottom;
    padding-bottom: 10rem !important;
  }
`;

const SecondContenedor = styled.div`
  background-image: url("https://firebasestorage.googleapis.com/v0/b/finally-8b306.appspot.com/o/imagenesDesarrollo%2FGrupo%20170.png?alt=media&token=3b6f3a43-b3c8-4de7-8a0d-a5e63e5f51ec");

  h2 {
    color: var(--amarillo1);
  }
  @media (max-width: 450px) {
    background-size: 20rem;
    background-repeat: no-repeat;
    background-position: left;
  }
  @media (min-width: 450px) {
    background-size: 32rem;
    background-repeat: no-repeat;
    background-position: left bottom;
    padding-bottom: 10rem !important;
  }

  p {
    color: var(--azul1);
    font-size: 1.8rem;
    font-family: "Montserrat", sans-serif !important;
  }
`;

const ThirdContenedor = styled.div`
  background-image: url("/static/img/celumsg2.png");
  min-height: 45vh;
  @media (max-width: 450px) {
    background-size: 20rem 23rem;
    background-repeat: no-repeat;
    background-position: right bottom;
  }
  @media (min-width: 450px) {
    background-size: 30rem 29rem;
    background-repeat: no-repeat;
    background-position: bottom right;
  }
`;

const Titulo = styled.h1`
  color: var(--amarillo1);
  font-size: 4.3rem;
`;

const SecondTitulo = styled.h1`
  color: var(--amarillo1);
  span {
    font-family: "Lobster", cursive;
    font-size: 4rem;
    margin: 0 0.5rem;
  }
  margin: 1rem 0 2rem 0;
`;

const Parrafo = styled.p`
  color: var(--azul1);
  font-size: 2rem;
  font-family: "Montserrat", sans-serif !important;
`;

const ParrafoSecond = styled.p`
  color: var(--azul1);
  font-size: 1.8rem;
  font-family: "Montserrat", sans-serif !important;

  i {
    color: var(--amarillo1);
  }
`;

export default function Home() {
  const { usuario } = useContext(FirebaseContext);

  return (
    <Layout>
      <div className="container-fluid principalBody">
        <FirstContenedor className="row pb-2">
          <Titulo className="col-12 mt-4 animate__animated animate__fadeInDown">
            Finales y parciales más amenos
          </Titulo>
          <div className="col-12 justify-content-right">
            <div className="row">
              <div className="col-2 col-lg-4"></div>
              <div className="col-10 col-lg-8 text-right animate__animated animate__fadeInDown mb-5">
                <Parrafo>
                  Encuentra{" "}
                  <strong>
                    personas que rindan el mismo final/parcial que vos
                  </strong>{" "}
                  o que cursen en la misma cátedra.
                </Parrafo>
                <Parrafo>
                  ¿Necesitas clases de apoyo?{" "}
                  <strong>Entonces busca a tu profe ideal.</strong>
                </Parrafo>
                <div className="mt-5">
                  {usuario ? (
                    <>
                      <Link href="/buscar-grupo">
                        <Boton className="btn" bgColor="true" type="button">
                          <i className="fab fa-whatsapp fa-lg"></i>Busca tu
                          grupo
                        </Boton>
                      </Link>
                      <br></br>
                      <Link href="/buscar-profesor">
                        <Boton
                          className="btn mt-3"
                          bgColor="true"
                          type="button"
                        >
                          <i className="fas fa-chalkboard-teacher "></i>
                          Encuentra a tu profe ideal
                        </Boton>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Boton
                        className="btn mb-3"
                        bgColor="true"
                        type="button"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      >
                        <i className="fab fa-whatsapp fa-lg"></i> Busca tu grupo
                      </Boton>
                      <br></br>
                      <Link href="/buscar-profesor">
                        <Boton
                          className="btn mt-3"
                          bgColor="true"
                          type="button"
                        >
                          <i className="fas fa-chalkboard-teacher "></i>
                          Encuentra a tu profe ideal
                        </Boton>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </FirstContenedor>

        <ThirdContenedor className="row  pb-2">
          <div className="col-12  animate__animated animate__fadeInRight ">
            <SecondTitulo className="text-left">
              ¿Que hace <span>finally</span>?
            </SecondTitulo>
          </div>
          <div className="col-8  animate__animated animate__fadeInRight text-left">
            <ParrafoSecond>Aquí podrás:</ParrafoSecond>
            <ParrafoSecond>
              <i className="fab fa-whatsapp fa-lg"></i> Sumarte a grupos de
              WhatsApp de cursadas o finales con personas de tu misma facultad.
            </ParrafoSecond>
            <ParrafoSecond>
              <i className="fas fa-chalkboard-teacher "></i> Encontrar al profe
              ideal para tus clases de apoyo.
            </ParrafoSecond>
          </div>
          <div className="col-4"></div>
        </ThirdContenedor>
        <SecondContenedor className="row  mt-5 pb-5 text-right">
          <div className="col-4"></div>
          <div className="col-8">
            <h2 className="mr-0 mb-0 ">
              <i className="fas fa-check mr-2"></i> ¿Sos buenx en una materia y te
              gustaría enseñar?
            </h2>
            <h2 className="mr-0">
              <i className="fas fa-check mr-2"></i> ¿Sos profe?
            </h2>
            <p>
              Entonces publica tu anuncio totalmente <b>GRATIS</b> y espera a
              ser contactado por unx de lxs miles de estudiantes que buscan
              aprobar sus materias.
            </p>
            <Link  href="/soy-profesor">
              <Boton className="d-inline-block mt-2" bgColor="true">Publica tu anuncio</Boton>
            </Link>
          </div>
        </SecondContenedor>
      </div>
    </Layout>
  );
}
