import React, { useState, useEffect, useContext } from "react";
import Layout from "../components/layout/Layout";
import CardClases from "../components/layout/CardClases";
import { FirebaseContext } from "../fb";
import Link from "next/link";

const MisAnuncios = () => {
  const { firebase, usuario } = useContext(FirebaseContext);

  const [misanuncios, guardarMisAnuncios] = useState([]);

  useEffect(() => {
    if (usuario) {
      const obtenerAnuncios = () => {
        firebase.db.collection("anuncios").onSnapshot(manejarSnapshot);
      };
      obtenerAnuncios();
    }
  }, [usuario]);

  function manejarSnapshot(snapshot) {
    var anuncios = [];
    snapshot.docs.map((doc) => {
      if (doc.data().creador.id === usuario.uid) {
        anuncios.push({ id: doc.id, ...doc.data() });
      }
    });
    console.log(anuncios);

    guardarMisAnuncios(anuncios);
  }

  if (!usuario)
    return (
      <Layout>
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-11 ">
              <div className="alert alert-primary" role="alert">
                <h1>Debes iniciar sesión para ver tus anuncios</h1>
                <a href="!#" data-toggle="modal" data-target="#exampleModalCenter">
                  Iniciar sesión
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 text-center mt-4">
            <h1>Tus anuncios publicados:</h1>
          </div>
          <div className="col-11">
            {misanuncios.length === 0 && (
              <div className="alert alert-primary" role="alert">
                <h2 className="text-center mb-0">
                  No tienes anuncios publicados.
                  <Link href="/soy-profesor">
                    <a>Crea uno!</a>
                  </Link>
                </h2>
              </div>
            )}
            {misanuncios.map((anuncio) => (
              <CardClases
                key={anuncio.id}
                anuncio={anuncio}
                idUsuario={usuario.uid}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MisAnuncios;
