import React from "react";
import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";

const Qr = styled.img`
  height: 20rem;
  width: auto;
`;

const Contacto = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-success mt-5" role="alert">
              <h2>
                Para sugerencias, reportar algún problema o simplemente darnos
                feedback contactanos:
              </h2>
              <p>
                Mándanos un mail a:{" "}
                <a href="mailto:toteberbel@gmail.com" target="_blank">
                  toteberbel@gmail.com
                </a> o <a href="mailto:fercativiela@live.com.ar">fercativiela@live.com.ar</a>
                .
              </p>
              <p>
                O un WhatsApp clickeando{" "}
                <a href="https://wa.me/5492995569304" target="_blank">
                  aquí.
                </a> <br></br>
                O bien escaneando este código con tu celular:
                <Qr src="/static/img/qr.png" className="img-fluid d-block mt-3" alt="codigo qr" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacto;
