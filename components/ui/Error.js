import React from 'react';
import styled from '@emotion/styled';

const Alerta = styled.div`
    margin: 1rem 0;
    span{
        font-size: small;
        padding: .4rem;
        border-radius: .3rem;
        font-weight: bold;
        color: red;
    }
`;

const Error = ({msg}) => {
    return (
        <Alerta className="animate__animated animate__headShake">
            <span className="alert alert-danger " role="alert">{msg}</span>
        </Alerta>
     );
}

export default Error;