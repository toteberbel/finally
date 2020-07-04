import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import Boton from "../ui/Boton";

const CartaHead = styled.div`
  background: #00f260; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0575e6,
    #00f260
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0575e6,
    #00f260
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  padding-bottom: 1rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  height: 4rem;
`;

const CartaBody = styled.div`
  width: 100%;

  border-top: 1px solid var(--lila1);
  h2 {
    margin: 0 0 0 1rem;
    color: var(--lila1);
  }
  p {
    margin: 0 0rem 1rem 1rem;
  }
`;

const Bordes = styled.div`
  border: 1px solid var(--lila1);
  border-radius: 1rem;
  display: block;
  background-color: #f5f5f5;
  padding: 0.1rem !important;

  &:hover {
    -webkit-box-shadow: 3px 11px 39px 3px rgba(0, 0, 0, 0.71) !important;
    -moz-box-shadow: 3px 11px 39px 3px rgba(0, 0, 0, 0.71) !important;
    box-shadow: 3px 11px 39px 3px rgba(0, 0, 0, 0.71) !important;
  }
`;

const Card = ({ grupo }) => {
  return (
    <div className="row justify-content-center mt-4 mb-5">
      <Bordes className="col-11 shadow">
        <CartaHead></CartaHead>
        <CartaBody>
          <div className="row">
            <div className="col-8 mt-2">
              <h2>{grupo.nombre}</h2>
              <p>Catedra: {grupo.catedra}</p>
            </div>
            <div className="col-4">
              <Boton href={grupo.link} className=" btn btn-outline-success float-right mt-3 mr-4">
                Unirme
              </Boton>
            </div>
          </div>
        </CartaBody>
      </Bordes>
    </div>
  );
};

export default Card;
