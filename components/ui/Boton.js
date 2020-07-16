import styled from '@emotion/styled';

const Boton = styled.a `
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    border: 1px solid #0B3C5D;
    padding: .8rem 2rem;
        border-radius: 2rem;
            &:hover {
        cursor: pointer;
    }

    background-color: ${props => props.bgColor ? "#0B3C5D" : 'transparent'};
    color: ${props => props.bgColor ? '#eaeaea' : '#0B3C5D'} !important;
    /* Esta es la forma de hacer dinamico un boton, le pasamos props que querramos segun las circustancias en que usemos */
    font-size: medium;
    border-radius: 2rem;


    &:hover {
        cursor: pointer;
    }
    img {
        height: 2rem;
        width: auto;
        margin-right: 1rem;
    }
`;

export default Boton;