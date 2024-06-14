import styled from 'styled-components';

export const LayoutContainer = styled.div`
    max-width: 74rem; //1184px
    height: calc(
        100vh -10rem
    ); //100vh pq quero a altura 100% sem precisar color 100% nos pais desse layoutContainer e -10rem para ter uma sobra e poder usar o margin em todos os lados
    margin: 5rem auto;
    padding: 2.5rem;

    background: ${(props) => props.theme['gray-800']};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
`;
