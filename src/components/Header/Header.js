import style from './Header.module.css';

import Logo from './../../components/Logo/Logo';
import Nav from './../../components/Nav/Nav';

const Header = () => {
    return (
        <header className={style.header}>
            <Logo />
            <Nav />
        </header>
    )
}

export default Header;
