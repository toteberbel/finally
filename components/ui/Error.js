import React from 'react';
import styled from '@emotion/styled';

const Alerta = styled.div`
    margin: 1rem 0;
    span{
        font-size: small;
        padding: .4rem;
        border-radius: 1rem;
        font-weight: bold;
        color: red;
    }
`;

const Error = ({msg}) => {
    return (
        <Alerta>
            <span>{msg}</span>
        </Alerta>
     );
}

export default Error;