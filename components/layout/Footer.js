import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Pie = styled.div`
  background-color: var(--azul1);
`;

const Span = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  color: #ffff;
`;

const DivImagenes = styled.div`
  img {
    width: 1.2rem;
    height: 1.2rem;
    margin: 0 0.5rem;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const Footer = () => {
  return (
    <footer>
    <div className="container-fluid">
      <Pie className="row">
        <div className="col-9 text-left pl-2">
          <Span>Todos los derechos reservados ®</Span>
        </div>
        <DivImagenes className="col-3">
          <img src="/static/img/fb.png" />
          <img src="/static/img/ig.png" />
          <img src="/static/img/tw.png" />
        </DivImagenes>
      </Pie>
      </div>
      </footer>
  );
};

export default Footer;
