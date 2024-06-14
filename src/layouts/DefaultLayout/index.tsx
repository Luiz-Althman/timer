import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { LayoutContainer } from './styles';

// O Outlet é um espaço em que o conteúdo irá ocupar (Home, History).

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <Outlet />
        </LayoutContainer>
    );
}
