import React from "react";
import styled from "@emotion/styled";
import FormularioLogin from "./FormularioLogin";
import Boton from "../ui/Boton";
import Router from "next/router";
import firebase from "../../fb";

const ModalPrincipal = styled.div`
  background-color: #c0e4d2;
  border-radius: 2rem;

  h1 {
    margin-left: 14vh;
    color: var(--azul1);
    font-size: xx-large;
  }
  p {
    text-align: center;
    font-size: small;
  }
  input {
    display: inline-block;
  }
`;

const Divisor = styled.div`
  margin-bottom: 1rem;
  background-color: #eaeaea;
  width: 100%;
  height: 0.05rem;
`;

const Input = styled.input`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  border: 1px solid var(--azul1);
  padding: 0.8rem 2rem;

  background-color: ${(props) => (props.bgColor ? "#0B3C5D" : "transparent")};
  color: ${(props) => (props.bgColor ? "#eaeaea" : "#0B3C5D")} !important;
  /* Esta es la forma de hacer dinamico un boton, le pasamos props que querramos segun las circustancias en que usemos */
  font-size: medium;
  border-radius: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

const Login = () => {
  const redireccionarCrearCuenta = () => {
    $("#exampleModalCenter").modal("hide");
    Router.push("/nueva-cuenta");
  };

  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="loguearse"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <ModalPrincipal className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title ">Inicia Sesión</h1>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body text-center">
            <FormularioLogin />
            <div id="inicia-google">
              <Boton onClick={firebase.loginGoogle}>
                <img src="/static/img/google.png" />
                Iniciar Sesión con Google
              </Boton>
            </div>
          </div>

          <Divisor></Divisor>

          <p>¿No tenes cuenta? Crea una super rápido</p>

          <div className="text-center mb-4">
            <Input
              type="submit"
              bgColor="true"
              value="Crear Cuenta"
              onClick={redireccionarCrearCuenta}
            />
          </div>
        </ModalPrincipal>
      </div>
    </div>
  );
};

export default Login;
