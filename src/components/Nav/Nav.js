import React from 'react'
import style from './../../components/Nav/Nav.module.css'
import { FaUserSecret } from 'react-icons/fa'

const Nav = () => {
    return (
        <ul className={style.primaryNav}>
            <li className={style.primaryNavItem}>Research</li>
            <li className={style.primaryNavItem}>Publications</li>
            <li className={style.primaryNavItem}>Roles</li>
            <li className={style.primaryNavItem}><FaUserSecret style={{fontSize: "1.8rem", margin: "0px"}} /></li>
        </ul>
    )
}

export default Nav;
