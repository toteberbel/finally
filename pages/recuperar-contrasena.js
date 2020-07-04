import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";
import firebase from "../fb";
import Enviado from "../components/layout/Recuperar";
import Login from "../components/layout/Login";

const ContenedorPpal = styled.div`
  min-height: 88vh;
  input {
    display: inline-block;
  }
  h1 {
    margin-top: 1rem;
    color: var(--azul1);
  }
  #recuadro {
    margin: 10vh 0;
    border: 1px solid var(--amarillo1);
    padding: 1rem;
    border-radius: 1.5rem;
  }
  .form-control {
    border-color: var(--amarillo1);
  }
  p {
    color: red;
    font-size: 1.5rem;
  }
`;

const Input = styled.input`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  border: 1px solid var(--azul1);
  padding: 0.8rem 2rem;
  margin: 2rem 0;

  background-color: #0b3c5d;
  color: #eaeaea !important;
  /* Esta es la forma de hacer dinamico un boton, le pasamos props que querramos segun las circustancias en que usemos */
  font-size: 1.5rem;
  border-radius: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

const Recuperar = () => {
  const [email, guardarEmail] = useState("");
  const [error, guardarError] = useState(false);
  const [linkenviado, guardarLinkEnviado] = useState(false);

  const handleChange = (e) => {
    guardarEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);

    firebase.recuperarContraseña(email);
    guardarLinkEnviado(true);
  };

  return (
    <Layout>
      <div className="container-fluid">
        <Login />
        <ContenedorPpal className="row justify-content-center text-center">
          <div className="col-11">
            <div id="recuadro" className="shadow-lg">
              <h1>Recupera tu contraseña</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Ingresa tu email:</label>
                  <input
                    onChange={handleChange}
                    className="form-control"
                    type="text"
                  />
                  {error && <p>Debe ingresar un email</p>}
                  {linkenviado && <Enviado />}
                </div>
                {linkenviado ? (
                  <Input
                    value="Volver a enviar link de recuperación"
                    type="submit"
                  />
                ) : (
                  <Input value="Enviar link de recuperación" type="submit" />
                )}
              </form>
            </div>
          </div>
        </ContenedorPpal>
      </div>
    </Layout>
  );
};

export default Recuperar;
