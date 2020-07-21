import Layout from "../components/layout/Layout";
import Link from "next/link";
import styled from "@emotion/styled";
import Boton from "../components/ui/Boton";

const Img = styled.img`
  height: 80%;
  width: 100vh;
`;
const Contenedor = styled.div`
  min-height: 85vh;
`;

export default function Custom404() {
  return (
    <Layout>
      <Contenedor>
        <div className="container-fluid">
          <div className="row justify-content-center mb-5">
            <div className="col-sm-12 col-md-6 text-center">
              <Img className="img-fluid" src="/static/img/404.jpg" alt="Error 404"/>
              <h1>Parece que la página que buscas no existe.</h1>
              <Link href="/" className="mb-1">
                <Boton bgColor="true">Volver al inicio</Boton>
              </Link>
            </div>
          </div>
        </div>
      </Contenedor>
    </Layout>
  );
}
