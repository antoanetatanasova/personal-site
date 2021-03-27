import style from './Footer.module.css'
import { FaResearchgate, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {

    const links = {
        researchgateUrl: "https://www.researchgate.net/profile/Antoaneta-Atanasova",
        githubUrl: "https://github.com/antoanetatanasova",
        linkedinUrl: "https://www.linkedin.com/in/antoanetatanasova/",
    }

    return (
        <footer className={style.footer}>
            <p>
                Follow me or contact me:
            </p>
            <ul className={style.footerContactInfo}>
                <li className={style.footerContactInfoItem}><a className={style.footerContactInfoItemLink} href={links.researchgateUrl}><FaResearchgate /></a></li>
                <li className={style.footerContactInfoItem}><a className={style.footerContactInfoItemLink} href={links.githubUrl}><FaGithub /></a></li>
                <li className={style.footerContactInfoItem}><a className={style.footerContactInfoItemLink} href={links.linkedinUrl}><FaLinkedin /></a></li>
            </ul>
            <p>
                Copyright &copy; 2021. All rights reserved
            </p>
        </footer>
    )
}

export default Footer;
