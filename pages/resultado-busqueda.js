import React, { useState, useEffect, useContext } from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout/Layout";
import Card from "../components/layout/Card";
import Spinner from "../components/ui/Spinner";
import Link from "next/link";
import { FirebaseContext } from "../fb";
import { useRouter } from "next/router";
import useGrupos from "../hooks/useGrupos";

const ContenedorPrincipal = styled.div`
  h1 {
    font-size: xx-large;
    color: var(--azul1);
    text-align: center;
    margin-bottom: 0.5rem !important;
  }
  i{
    color: var(--amarillo1);
    &:hover{
      cursor: pointer;
    }
  }

  min-height: 88.5vh;
`;

const Badge = styled.a`
  color: var(--azul1) !important;
  /* background: var(--amarillo1); */
  border: 1px solid var(--azul1);
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  &:hover {
    cursor: pointer;
  }
`

const ResultadoBusqueda = () => {
  const router = useRouter();
  const {
    query: { q, tipo },
  } = router;

  const [gruposDB, guardarGruposDB] = useState([]);
  const [busqueda, guardarBusqueda] = useState([]);
  const [sinGrupos, guardarSinGrupos] = useState(false); //Si no hay grupso segun la busqueda
  const { grupos } = useGrupos(q, tipo);
  //q es la facultad y se lo estoy mandando desde buscar-grupo

  useEffect(() => {
    guardarGruposDB(grupos);
  }, [grupos]);

  const { usuario } = useContext(FirebaseContext);

  const busquedaChange = (e) => {
    guardarBusqueda(e.target.value);
  };

  const submitBuscar = (e) => {
    e.preventDefault();
    const busquedaGrupo = busqueda.toLocaleLowerCase().trim();
    const filtrados = grupos.filter((grupo) => {
      return (
        grupo.nombre.toLocaleLowerCase().includes(busquedaGrupo) ||
        grupo.nombre.toLocaleLowerCase().includes(busquedaGrupo)
      );
    });

    if (filtrados.length === 0) {
      guardarSinGrupos(true);
    } else {
      guardarSinGrupos(false);
    }

    guardarGruposDB(filtrados);
  };

  return (
    <Layout>
      <div className="container-fluid">
        {!usuario ? (
          <ContenedorPrincipal className="row">
            <h1>Cargando...</h1>
          </ContenedorPrincipal>
        ) : (
          <ContenedorPrincipal className="row ">
            {grupos.length === 0 ? (
              <Spinner />
            ) : (
              <div className="col mt-5 ">
                <h1>Resultados:</h1>
                <form className="m-3 text-center" onSubmit={submitBuscar}>
                  <input
                    className="form-control d-inline"
                    onChange={busquedaChange}
                  />
                  <i
                    onClick={submitBuscar}
                    className="fas fa-search fa-lg ml-2"
                  ></i>
                </form>
                <div className="text-center pb-4">
                  <Link href="/buscar-grupo">
                    <Badge className="badge">
                      {tipo} {q} &times;
                    </Badge>
                  </Link>
                </div>
                <div className="animate__animated animate__fadeInRight">
                  {gruposDB.map((grupo) => (
                    <Card key={grupo.id} grupo={grupo} />
                  ))}
                </div>
                {sinGrupos && (
                  <div className="text-center">
                    <h1 className="mb-1">
                      No encontramos grupos según tu búsqueda :(
                    </h1>
                    <small>
                      Prueba con otras palabras para mejorar tu búsqueda.
                    </small>
                  </div>
                )}

                <div className="text-center m-5">
                  <p>
                    ¿No encontras el grupo que buscabas?
                    <b>
                      <a
                        target="_blank"
                        href="https://wa.me/5492995569304?text=Hola,%20en%20Finally%20está%20faltando%20un%20grupo%20de%20la%20materia:"
                      >
                        {" "}
                        Por favor haz click aquí para enviarnos un WhatsApp y
                        hacernos saber.
                      </a>
                    </b>
                  </p>
                </div>
              </div>
            )}
          </ContenedorPrincipal>
        )}
      </div>
    </Layout>
  );
};

export default ResultadoBusqueda;
