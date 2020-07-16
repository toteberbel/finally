import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../fb";
import Layout from "../components/layout/Layout";
import CardClases from "../components/layout/CardClases";
import styled from "@emotion/styled";
import Spinner from "../components/ui/Spinner";

const Cabecera = styled.div`
  input {
    width: 90%;
  }

  h1 {
    color: var(--azul1);
  }
  i {
    color: var(--amarillo1);
    &:hover {
      cursor: pointer;
    }
  }
`;

const BuscarProfesor = () => {
  const { firebase, usuario } = useContext(FirebaseContext);
  const [anuncios, guardarAnuncios] = useState([]);
  const [busqueda, guardarBusqueda] = useState("");
  const [anunciosConFiltro, guardarAnunciosConFiltro] = useState([]);
  const [sinAnuncios, guardarSinAnuncios] = useState(false);


  useEffect(() => {
    const obtenerAnuncios = () => {
      firebase.db
        .collection("anuncios")
        .orderBy("creado", "desc")
        .onSnapshot(manejarSnapshot);
    };
    obtenerAnuncios();
  }, []);

  function manejarSnapshot(snapshot) {
    const anunciosDB = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    guardarAnuncios(anunciosDB);
  }

  useEffect(() => {
    guardarAnunciosConFiltro(anuncios);
  }, [anuncios]);

  const handleBusqueda = (e) => {
    guardarBusqueda(e.target.value);
  };

  const submitBusqueda = (e) => {
    e.preventDefault();
    const busquedaInput = busqueda.toLocaleLowerCase().trim();
    const filtrados = anuncios.filter((anuncio) => {
      return (
        anuncio.titulo.toLocaleLowerCase().includes(busquedaInput) ||
        anuncio.descripcion.toLocaleLowerCase().includes(busquedaInput) ||
        anuncio.creador.nombre.toLocaleLowerCase().includes(busquedaInput)
      );
    });

    if (filtrados.length === 0) {
      guardarSinAnuncios(true); //NO hay anuncios para mostrar
    } else {
      guardarSinAnuncios(false);
    }

    guardarAnunciosConFiltro(filtrados);
  };

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <Cabecera className="col-11 mt-5 mb-5 text-center">
            <h1 className="mb-3">Encuentra tu profesor ideal</h1>
            <form onSubmit={submitBusqueda}>
              <input
                className="form-control d-inline-block"
                onChange={handleBusqueda}
              />
              <i
                onClick={submitBusqueda}
                className="fas fa-search fa-lg ml-2"
              ></i>
              <small className="d-block mt-2">
                Busca por: materia, tema o profesor.
              </small>
            </form>
          </Cabecera>
          <div className="col-11">
            {anuncios.length === 0 && <Spinner />}
            {anunciosConFiltro.map((anuncio) => (
              <CardClases key={anuncio.id} anuncio={anuncio} />
            ))}
            {sinAnuncios && (
              <div className="text-center">
                <h1 className="mb-1">No encontramos profesor según tu búsqueda :(</h1>
                <small>Prueba con otras palabras para mejorar tu búsqueda.</small>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BuscarProfesor;
