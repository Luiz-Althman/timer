import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

// O Outlet é um espaço em que o conteúdo irá ocupar (Home, History).

export function DefaultLayout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}
