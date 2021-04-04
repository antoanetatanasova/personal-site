import style from './Header.module.css';

import Logo from './../../components/Logo/Logo';
import Nav from './../../components/Nav/Nav';

const Header = ({user}) => {
    return (
        <header className={style.header}>
            <Logo />
            <Nav user={user} />
        </header>
    )
}

export default Header;
