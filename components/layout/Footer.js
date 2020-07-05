import React from "react";
import styled from "@emotion/styled";

const Pie = styled.div`
  background-color: var(--azul1);
  padding: 0.5rem 0;
`;

const Span = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
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
      <Pie className="row text-center">
        <div className="col-12">
          <Span>Todos los derechos reservados ®</Span>
        </div>
        <DivImagenes className="col-12">
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
