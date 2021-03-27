import style from './Logo.module.css'

const Logo = () => {
    const siteTitle = "Antoaneta Atanasova";

    return (
        <>
            <h1 className={style.logo}>{siteTitle}</h1>
        </>
    );
}

export default Logo
