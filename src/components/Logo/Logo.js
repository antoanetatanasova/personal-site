import style from './Logo.module.css';
import {GiBookmarklet} from 'react-icons/gi'

const Logo = () => {
    const siteTitle = "Antoaneta Atanasova";

    return (
        <>
            <h1 className={style.logo}><a style={{"color": "#0683D7"}} href='/'>{siteTitle} <GiBookmarklet /></a></h1>
        </>
    );
}

export default Logo;
