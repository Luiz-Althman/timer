import { HeaderContainer } from './styles';
import Logo from '../../assets/Logo.svg';
import { LuTimer } from 'react-icons/lu';
import { LuScrollText } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';

export function Header() {
    return (
        <HeaderContainer>
            <img src={Logo} alt="" />
            <nav>
                <NavLink to="/" title="Timer">
                    <LuTimer size={24} />
                </NavLink>
                <NavLink to="/history" title="Histórico">
                    <LuScrollText size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    );
}
