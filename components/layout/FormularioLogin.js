import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import firebase from "../../fb";
import Router from "next/router";
import Error from "../ui/Error";
import Swal from "sweetalert2";
import Link from "next/link";

//validacion
import useValidacion from "../../hooks/useValidacion";
import validarIniciarSesion from "../../validacion/validarIniciarSesion";

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

const Icono = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1.2rem;
`;

const RecuperaContraseña = styled.p`
  font-size: small !important;
  margin: 1rem 0 2rem 0;
`;

const STATE_INICIAL = {
  email: "",
  password: "",
};

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const FormularioLogin = () => {
  const [error, guardarError] = useState(false);

  if (error) {
    setTimeout(() => {
      guardarError(false);
    }, 18000);
  }

  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    // handleBlur,
  } = useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);

  const { email, password } = valores;

  async function iniciarSesion() {
    try {
      await firebase.login(email, password);
      $("#exampleModalCenter").modal("hide");

      Toast.fire({
        icon: "success",
        title: "Ha iniciado sesión correctamente",
      });
      Router.push("/buscar-grupo");
    } catch (error) {
      console.log("Hubo un error al autenticar el usuario", error.message);
      guardarError(error.message);
    }
  }

  const redireccionarRecuperarContraseña = () => {
    $("#exampleModalCenter").modal("hide");
    Router.push("/recuperar-contrasena")
  };

  return (
    <form className="text-center" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <Icono src="/static/img/user.png" />
        <input
          type="email"
          className="form-control"
          id="emailInicio"
          aria-describedby="emailHelp"
          placeholder="Ingresá un email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      {errores.email && <Error msg={errores.email} />}
      <div className="form-group">
        <Icono src="/static/img/password.png" />
        <input
          type="password"
          className="form-control"
          id="passwordInicio"
          placeholder="Ingresá tu contraseña"
          name="password"
          value={password}
          onChange={handleChange}
        />
        {errores.password && <Error msg={errores.password} />}
        {error && <Error msg={error} />}
      </div>
      <Input
        id="inicia-sesion"
        type="submit"
        bgColor="true"
        value="Iniciar Sesion"
      />

      <RecuperaContraseña>
        ¿Olvidaste tu contraseña? <a onClick={redireccionarRecuperarContraseña}>Click aquí</a>
      </RecuperaContraseña>
    </form>
  );
};

export default FormularioLogin;
