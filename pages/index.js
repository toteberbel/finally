import React, { useContext } from "react";
import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";
import Link from "next/link";
import Boton from "../components/ui/Boton";
import Login from "../components/layout/Login";
import Sidebar from '../components/layout/Sidebar';
import { FirebaseContext } from "../fb/index";

const FirstContenedor = styled.div`
  background-color: #eaeaea;
  background-image: url("/static/img/chicaestudia2.png");
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
    background-size: 30rem 25rem;
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
  background-color: #eaeaea;
  background-image: url("/static/img/celumsg2.png");
  min-height: 45vh;
  @media (max-width: 450px) {
    background-size: 25rem 25rem;
    background-repeat: no-repeat;
    background-position: right;
  }
  @media (min-width: 450px) {
    background-size: 35rem 34rem;
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
  font-weight: bold;
  font-size: 2rem;
  font-family: "Montserrat", sans-serif !important;
`;

const ParrafoSecond = styled.p`
  color: var(--azul1);
  font-weight: bold;
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
      <div className="container-fluid">
        <Login />
        <FirstContenedor className="row pb-2">
          <Titulo className="col-12 mt-4 animate__animated animate__fadeInDown">
            Finales y parciales más amenos
          </Titulo>
          <div className="col-12 justify-content-right">
            <div className="row">
              <div className="col-md-2 col-lg-4"></div>
              <div className="col-md-10 col-lg-8 text-right animate__animated animate__fadeInDown">
                <Parrafo>
                  Encuentra personas que rindan el mismo final/parcial que vos o
                  que cursen en la misma cátedra.
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
                      <Link href="/buscar-grupo">
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
                      <Boton
                        className="btn mb-5"
                        bgColor="true"
                        type="button"
                        type="button"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                      >
                        <i className="fas fa-chalkboard-teacher "></i>Encuentra
                        a tu profe ideal
                      </Boton>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </FirstContenedor>

        <SecondContenedor className="row pb-5">
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
              <i className="fas fa-chalkboard-teacher "></i> Encontrar al
              profesor ideal para tus clases de apoyo.
            </ParrafoSecond>
          </div>
          <div className="col-4"></div>
        </SecondContenedor>
      </div>
    </Layout>
  );
}
