import React, { useContext } from "react";
import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";
import Link from "next/link";
import Boton from "../components/ui/Boton";
import Login from "../components/layout/Login";
import {
  FirebaseContext
} from "../fb/index";

const FirstContenedor = styled.div`
  background-color: #eaeaea;
  background-image: url("/static/img/chicaestudia.png");
  min-height: 44vh;

  @media (max-width: 450px) {
    background-size: 25rem 25rem;
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
`;

const SecondContenedor = styled.div`
  background-color: #eaeaea;
  background-image: url("/static/img/celumsg.png");
 min-height: 45vh;
  @media (max-width: 450px) {
    background-size: 20rem 20rem;
    background-repeat: no-repeat;
    background-position: right;
  }
  @media (min-width: 450px) {
    background-size: 30rem 30rem;
    background-repeat: no-repeat;
    padding-bottom: 10rem !important;
    background-position-x: 60vw;
  }
`;

export default function Home() {
  const { usuario } = useContext(FirebaseContext);
  console.log(usuario);

  return (
    <Layout>
      <div className="container-fluid">
        <Login />
        <FirstContenedor className="row pb-2">
          <Titulo className="col-12 mt-4">
            Finales y parciales más amenos
          </Titulo>
          <div className="col-12 justify-content-right">
            <div className="row">
              <div className="col-4"></div>
              <div className="col-8 text-right">
                <Parrafo>
                  Encuentra personas que rindan el mismo final/parcial o que
                  cursen en la misma cátedra que vos.
                </Parrafo>

                {usuario ? (
                  <Link href="/buscar-grupo">
                    <Boton
                      className="btn"
                      bgColor="true"
                      type="button"
                    >
                      Busca tu grupo
                    </Boton>
                  </Link>
                ) : (
                  <Boton
                    id="busca-grupo"
                    className="btn"
                    bgColor="true"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    Busca tu grupo
                  </Boton>
                )}
              </div>
            </div>
          </div>
        </FirstContenedor>

        <SecondContenedor className="row pb-5">
          <div className="col-12 ">
            <SecondTitulo className="text-left">
              ¿Que hace <span>finally</span>?
            </SecondTitulo>
          </div>
          <div className="col-8">
            <ParrafoSecond className="text-left">
              Es un lugar para buscar y sumarse a grupos de WhatsApp de
              cursadas, parciales o finales con el fin de ayudarse entre los
              estudiantes que estén allí.
            </ParrafoSecond>
          </div>
          <div className="col-4"></div>
        </SecondContenedor>
      </div>
    </Layout>
  );
}
