import React, { useContext, useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { FirebaseContext } from "../../fb";
import Swal from "sweetalert2";

const TituloHeader = styled.a`
  font-family: "Lobster", cursive;
  font-size: 4rem;
  color: var(--amarillo1) !important;

  &:hover {
    cursor: pointer;
  }
`;

const ContenedorHeader = styled.div`
  background-color: var(--azul1);
  text-align: center;
  i {
    color: var(--amarillo1);
    margin-top: 2.5rem;
    &:hover {
      cursor: pointer;
    }
  }
`;

const ImagenUsuario = styled.img`
  margin-top: 2rem;
  max-width: 2.5rem;
  height: auto;
  &:hover {
    cursor: pointer;
  }
`;

const Colapso = styled.div`
  color: var(--azu1);
  font-size: 2rem;
  font-weight: 700;
  border: 1px solid var(--amarillo1);
  border-radius: 0.5rem;
  p {
    margin-left: 1rem;
  }
  span {
    font-size: small;
    margin: 0 1rem;
  }

  max-width: 30rem;

  a {
    color: #ffff;
    background-color: var(--azul1);
    margin-bottom: 1px;
    font-size: 1.5rem;
    text-align: center;
    &:hover {
      cursor: pointer;
    }
    &:last-of-type {
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
      margin: 0;
    }
  }

  padding-bottom: 0;
`;
const Divisor = styled.div`
  height: 1.5px;
  background-color: #eaeaea;
  margin-top: 1rem;
`;

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

const Header = ({ menu }) => {
  const { usuario, firebase } = useContext(FirebaseContext);
  const [menuabierto, guardarMenuAbierto] = useState(false);

  //Chequear el tamaño de la pantalla
  var anchoPantalla = useRef(null);

  useEffect(() => {
    var width = anchoPantalla.current.clientWidth;

    if (width > 770) {
      guardarMenuAbierto(true);
    } else {
      guardarMenuAbierto(false);
    }
  }, [anchoPantalla]);

  const clickMenu = (e) => {
    e.preventDefault();
    if (menuabierto) {
      guardarMenuAbierto(false);
    } else {
      guardarMenuAbierto(true);
    }
    menu.current.classList.toggle("toggled");
  };

  return (
    <div className="container-fluid">
      <ContenedorHeader ref={anchoPantalla} className="row text-center">
        <div className="col-12">
          {menuabierto ? (
            <i
              className="fas fa-times fa-lg float-left"
              id="menu-toggle"
              onClick={clickMenu}
            ></i>
          ) : (
            <i
              className="fas fa-bars fa-lg float-left"
              id="menu-toggle"
              onClick={clickMenu}
            ></i>
          )}
          <Link href="/">
            <TituloHeader>finally</TituloHeader>
          </Link>

          <i
            className="fas fa-user-circle fa-lg float-right mb-1"
            id="menuPerfil"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          ></i>
          <Colapso
            className="dropdown-menu shadow"
            aria-labelledby="menuPerfil"
          >
            {usuario && (
              <p>
                Hola <b>{usuario.displayName}</b>
              </p>
            )}
            <span className="d-block">¿Tienes un problema?</span>
            <span>Contacto: toteberbel@gmail.com</span>
            <Divisor></Divisor>
            {!usuario ? (
              <a
                className="dropdown-item btn text-center"
                onClick={() => $("#exampleModalCenter").modal("show")}
              >
                Iniciar Sesión
              </a>
            ) : (
              <>
                <Link href="/mis-anuncios">
                  <a className="dropdown-item text-center">Mis anuncios</a>
                </Link>
                <Link href="/">
                  <a
                    className="dropdown-item text-center"
                    onClick={() => (
                      firebase.cerrarSesion(),
                      Toast.fire({
                        icon: "success",
                        title: "Se ha cerrado su sesión",
                      })
                    )}
                  >
                    Cerrar Sesión
                  </a>
                </Link>
              </>
            )}
          </Colapso>
        </div>
      </ContenedorHeader>
    </div>
  );
};

export default Header;
