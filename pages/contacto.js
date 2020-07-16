import React from "react";
import Layout from "../components/layout/Layout";

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
                </a>
                .
              </p>
              <p>
                O un WhatsApp clickeando{" "}
                <a href="https://wa.me/5492995569304" target="_blank">
                  aquí.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacto;
