import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green',
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    border-radius: 4px;
    border: 0;
    margin: 8px;
    background-color: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};

    /* ${(props) => {
        return css`
            background-color: ${buttonVariants[props.variant]};
        `;
    }} 
     Isso é uma interpolação de strings. No styled-components, toda vez que colocar uma interpolação, o styled-components irá executar como uma função tudo que estiver dentro dos bigodes e ele vai enviar para essa função, todas as props do meu ButtonContainer. ButtonContainer recebe uma props chamada variant que vem para dentro desse arquivo e entra no lugar da 'props.variant' que é o que está vindo lá do button.
     o css importado do styled-components é só para dar a mesma cor de css dentro das caspetas.
     Isso ajuda a não ter várias classes no button.
     */
`;
