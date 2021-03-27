import React from 'react'
import style from './../../components/Nav/Nav.module.css'
import { FaUserSecret } from 'react-icons/fa'

const Nav = () => {
    return (
        <ul className={style.primaryNav}>
            <li className={style.primaryNavItem}><a href="/research">Research</a></li>
            <li className={style.primaryNavItem}><a href="/publications">Publications</a></li>
            <li className={style.primaryNavItem}><a href="/roles">Roles</a></li>
            <a href="/secret-zone"><li className={style.primaryNavItem}><FaUserSecret style={{fontSize: "1.8rem", margin: "0px"}} /></li></a>
        </ul>
    )
}

export default Nav;
