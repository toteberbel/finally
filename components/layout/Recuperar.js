import styled from "@emotion/styled";

const Contenedor = styled.div`
background-color: #C7FCE2;
margin-top: 2rem;
  border-radius: 2rem;
  padding: 1rem;
  p {
      color: black !important;
  }


`;

const Enviado = () => {
  return (
      <Contenedor>
      <p>El link para recuperar tu contraseña ha sido enviado a tu email.</p>
      <p>
        Si no lo encuentras en tu casilla principal, verifica la carpeta{" "}
        <b>Spam</b> o <b>No deseados</b>
      </p>
    </Contenedor>
  );
};

export default Enviado;
