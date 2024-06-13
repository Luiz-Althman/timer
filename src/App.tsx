import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';

// O importante do </BrowserRouter> é que ele fique em volta das rotas (Router), agora se ele fica dentro ou fora do ThemeProvider, tanto faz.

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
            <GlobalStyle />
        </ThemeProvider>
    );
}
