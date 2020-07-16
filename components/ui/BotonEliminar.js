import styled from '@emotion/styled';

const BotonEliminar = styled.span`
    padding: 0.5rem 1rem;
    color: red;
    border: 0.5px solid red;
    border-radius: 2rem;
    font-size: small;
    font-weight: 700;

    i{
        color: red;
    }
    &:hover{
        cursor: pointer;
        background-color: red;
        color: #ffff;
        i{
            color: #ffff;
        }
    }
`;

export default BotonEliminar;