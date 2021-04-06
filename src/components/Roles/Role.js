import style from './Role.module.css';
import { FaPen, FaTrash } from 'react-icons/fa'
import Button from './../shared/Button'

const Role = ({ role, onDelete }) => {
    return (
        <article className={style.role}>
            <div className={style.roleWrapper}>
                <div className={style.roleTitleWrapper}>
                    <h3>
                        {role.role} at {role.institution}
                    </h3>
                    <div className={style.roleActionsWrapper}>
                        <FaPen /> <FaTrash style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(role.id)}/>
                    </div>

                </div>
                <p>
                    {role.description}
                </p>
                <p>{role.years}</p>
                <Button text="Details"/>
            </div>
        </article>
    )
}

export default Role;