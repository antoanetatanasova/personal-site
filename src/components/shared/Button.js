import React from 'react'
import style from './../shared/Button.module.css'

const Button = ({text, onClick}) => {
    return (
        <button className={style.btn} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;
