import React from 'react'
import style from './../../components/Nav/Nav.module.css'
import { FaUserSecret } from 'react-icons/fa'
import UserActions from '../UserActions/UserActions'
// import {Link} from 'react-router-dom';

const Nav = ({user}) => {
    return (
        <ul className={style.primaryNav}>
            <li className={style.primaryNavItem}><a href="/">Home</a></li>
            <li className={style.primaryNavItem}><a href="/research">Research</a></li>
            <li className={style.primaryNavItem}><a href="/publications">Publications</a></li>
            <li className={style.primaryNavItem}><a href="/roles">Roles</a></li>
            <li className={style.primaryNavItem}><FaUserSecret style={{ fontSize: "1.8rem", margin: "0px" }} />
                <UserActions user={user} />
            </li>
        </ul>
    )
}

export default Nav;
