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
i {
  color: #ffff;
  margin: 0 6px;
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
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-instagram-square"></i>
        </DivImagenes>
      </Pie>
      </div>
      </footer>
  );
};

export default Footer;
