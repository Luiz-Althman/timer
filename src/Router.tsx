import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { History } from './pages/History';
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
    //<Route path="/" element={<DefaultLayout />}> está englobando todos que terão esse layout como padrão e por isso está com o path com "/". Caso surgisse outras rotas com padrões diferentes, tipo admin, criaria outro <Route path="/admin" element={<AdminLayout />}> e todas as rotas que tivessem /admin no começo, seriam colocadas dentro dele.

    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
            </Route>
        </Routes>
    );
}
