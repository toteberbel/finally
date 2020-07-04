import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import firebase from "../fb";
import Router from "next/router";
import Error from "../components/ui/Error";
import Layout from "../components/layout/Layout";
import Terminos from "../components/layout/Terminos";
import Login from "../components/layout/Login";


//validacion
import useValidacion from "../hooks/useValidacion";
import validarCrearCuenta from "../validacion/validarCrearCuenta";

import Swal from "sweetalert2";
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const IconoUser = styled.img`
  width: auto;
  height: 2.3rem;
  margin-right: 1.2rem;
`;
const IconoPass = styled.img`
  width: auto;
  height: 2.8rem;
  margin-right: 1.2rem;
`;

const IconoMail = styled.img`
  width: auto;
  height: 2rem;
  margin-right: 1.2rem;
`;

const IconoHat = styled.img`
  width: auto;
  height: 2.5rem;
  margin-right: 1.2rem;
`;

const ContenedorPrincipal = styled.div`
  background-color: #ffff;
  padding: 6.3rem 0;

  #acepto {
    font-size: medium;
    margin: 0 0 0.3rem 0;
    text-decoration: underline;
    &:hover {
      color: blue;
    }
  }
  input {
    display: inline-block;
  }
`;

const Titulo = styled.div`
  color: var(--azul1);
  font-size: xx-large;
  margin: 1rem 0;
  font-weight: 700;
`;

const LegajoGroup = styled.div`
  input {
    display: inline-block;
    width: 33%;
  }
  span {
    font-size: 2rem;
  }
`;
const Input = styled.input`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  border: 1px solid #0b3c5d;
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

const STATE_INICIAL = {
  nombre: "",
  facultad: "",
  numLegajo: "",
  email: "",
  password: "",
  confirmacionPassword: "",
  acepta: undefined,
};

const FormularioNuevaCuenta = () => {
  const [error, guardarError] = useState(false);

  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleCheckbox,
  } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  const {
    email,
    password,
    nombre,
    acepta,
    confirmacionPassword,
    facultad,
    numLegajo,
  } = valores;

  async function crearCuenta() {
    try {
      await firebase.registrar(email, password, nombre, facultad, numLegajo);
      firebase.db
        .collection("usuarios")
        .add({ nombre, facultad, numLegajo, email });

      Router.push("/");
      Swal.fire({
        icon: "success",
        title: "Tu cuenta ha sido creada exitosamente",
        width: 600,
        padding: "1em",
        timer: 4000,
      });
    } catch (error) {
      console.log("Hubo un error al crear el usuario", error.message);
      if (
        error.message ===
        "The email address is already in use by another account."
      ) {
        guardarError("Ya existe una cuenta registrada con ese email ");

        Swal.fire({
          title: "Ya existe una cuenta registrada con ese email",
          width: 600,
          padding: "1em",
          icon: "error",
        });
      }
    }
  }

  return (
    <Layout>
      <div className="container-fluid">
        <Login />
        <ContenedorPrincipal className="row min-vh-100">
          <Terminos />
          <div className="col-12 text-center">
            <div>
              <Titulo>Crea una cuenta</Titulo>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre y apellido</label>

                  <IconoUser src="/static/img/user.png" />
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Tu nombre y apellido"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                  />
                  {errores.nombre && <Error msg={errores.nombre} />}
                </div>
                <LegajoGroup className="form-group">
                  <label htmlFor="facultad">Legajo</label>
                  <IconoHat src="/static/img/hat.png" />
                  <input
                    type="text"
                    className="form-control"
                    id="facultad"
                    placeholder="Ej: FAEA"
                    name="facultad"
                    value={facultad}
                    onChange={handleChange}
                  />
                  <span> / </span>
                  <input
                    type="number"
                    className="form-control"
                    id="numLegajo"
                    placeholder="Ej: 0101"
                    maxLength="4"
                    name="numLegajo"
                    value={numLegajo}
                    onChange={handleChange}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Por ejemplo: FAEA / 0101
                  </small>
                  {errores.facultad && <Error msg={errores.facultad} />}
                </LegajoGroup>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <IconoMail src="/static/img/email.png" />

                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Ingresá un email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                  <small className="form-text text-muted">
                    * Jamás compartiremos tu email con terceros
                  </small>
                  {errores.email && <Error msg={errores.email} />}
                  {error && <Error msg={error} />}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <IconoPass src="/static/img/password.png" />
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Ingresá una contraseña"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    className="form-control mt-3 ml-5"
                    placeholder="Repite tu contraseña"
                    name="confirmacionPassword"
                    value={confirmacionPassword}
                    onChange={handleChange}
                  />
                  {errores.password && <Error msg={errores.password} />}
                </div>
                <div className="form-group d-block mt-4">
                  <input
                    id="tyc"
                    type="checkbox"
                    name="acepta"
                    onClick={handleCheckbox}
                  />

                  <p
                    id="acepto"
                    className="btn"
                    data-toggle="modal"
                    data-target="#tyc-modal"
                  >
                    Acepto los Términos y Condiciones
                  </p>
                </div>
                {errores.acepta && <Error msg={errores.acepta} />}

                <Input
                  className="mt-4 mb-4"
                  type="submit"
                  value="Crear Cuenta"
                  bgColor="true"
                />
              </form>
            </div>
          </div>
        </ContenedorPrincipal>
      </div>
    </Layout>
  );
};

export default FormularioNuevaCuenta;
