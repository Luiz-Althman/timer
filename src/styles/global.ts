import { createGlobalStyle } from 'styled-components';

// Para os estilos globais terem acesso as variáveis do nosso theme, ele precisa estar dentro do <ThemeProvider> e tanto faz a posição dele. Posso importar ele em qualquer lugar da aplicação.

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
}

body{
    background: ${(props) => props.theme['gray-900']};
    color:${(props) => props.theme['gray-300']};
}

body, input, textarea, button{
    //o segundo valor da family é para se caso não carregar a roboto, carregue uma sem serifa
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

`;
