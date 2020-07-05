import React, { useContext, useState } from "react";
import styled from "@emotion/styled";
import Boton from "../components/ui/Boton";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import { FirebaseContext } from "../fb";
import Router from "next/router";

const ContenedorPrincipal = styled.div`
  background-color: #eaeaea;
  min-height: 89vh;
  h1 {
    color: var(--azul1);
    font-size: xx-large;
  }
`;

const Opciones = styled.a`
  display: block;
  padding: 2rem 2rem;
  font-family: "Open Sans", sans-serif;
  font-size: x-large;
  font-weight: 700;
  background-color: var(--amarillo1);

  color: var(--azul1) !important;

  &:hover {
    cursor: pointer;
  }
`;

const MarginDiv = styled.div`
  margin: 15rem 0 23rem 0;
`;

const CardBody = styled.div`
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-top: 0;
  background-color: #eaeaea;

  border: 1px solid var(--amarillo1);
  select {
    width: 25%;
    border-radius: 0.5rem;
  }

  label {
    display: inline !important;
    margin-right: 1rem;
  }

  select {
    background-color: #f7e8e8;
  }
`;

const Busqueda = () => {
  const { usuario } = useContext(FirebaseContext);

  const facultades = [
    {
      id: 1,
      nombre: "FAEA",
    },
    {
      id: 2,
      nombre: "FATU",
    },
    
    {
      id: 3,
      nombre: "FACE",
    },
    {
      id: 4,
      nombre: "FAIN",
    },
  ];

  const [facultadseleccionada, guardarFacultadSeleccionada] = useState("FAEA");

  const handleSelect = (e) => {
    guardarFacultadSeleccionada(e.target.value);
  };

  const buscarFinales = () => {
    Router.push({
      pathname: "/resultado-busqueda",
      query: {
        tipo: "finales",
        q: facultadseleccionada,
      },
    });
  };
  const buscarCursadas = () => {
    Router.push({
      pathname: "/resultado-busqueda",
      query: {
        tipo: "cursadas",
        q: facultadseleccionada,
      },
    });
  };

  return (
    <Layout>
      <div className="container-fluid">
        {!usuario ? (
          <h1>Cargando...</h1>
        ) : (
          <div className="row text-center">
            <ContenedorPrincipal className="col-12">
              <MarginDiv>
                <h1 className="mt-5">Buscar grupo de:</h1>

                <div className="row justify-content-center mb-5">
                  <div className="col-md-12 col-lg-8">
                    <Opciones
                      className="rounded-pill "
                      data-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Finales
                    </Opciones>
                  </div>
                  <div className="col-10 col-lg-6">
                    <div className="collapse text-center" id="collapseExample">
                      <CardBody className="card card-body">
                        <div>
                          <label>Facultad:</label>
                            <select onChange={handleSelect}>
                              <option key="1">FAEA</option>
                            {/* {facultades.map((facultad) => (
                              <option key={facultad.id}>
                                {facultad.nombre}
                              </option>
                            ))} */}
                          </select>
                        </div>
                        <Boton
                          onClick={buscarFinales}
                          bgColor="true"
                          className="mt-3"
                        >
                          Buscar
                        </Boton>
                      </CardBody>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center mb-5">
                  <div className="col-md-12 col-lg-8">
                    <Opciones
                      className="rounded-pill"
                      data-toggle="collapse"
                      href="#collapseCursadas"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Cursadas
                    </Opciones>
                  </div>
                  <div className="col-10 col-lg-6">
                    <div className="collapse text-center" id="collapseCursadas">
                      <CardBody className="card card-body">
                        <div>
                          <label>Facultad:</label>
                          <select onChange={handleSelect}>
                            {facultades.map((facultad) => (
                              <option key={facultad.id}>
                                {facultad.nombre}
                              </option>
                            ))}
                          </select>
                        </div>
                        <Boton
                          onClick={buscarCursadas}
                          bgColor="true"
                          className="mt-3"
                        >
                          Buscar
                        </Boton>
                      </CardBody>
                    </div>
                  </div>
                </div>
              </MarginDiv>
            </ContenedorPrincipal>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Busqueda;
