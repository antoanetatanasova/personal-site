import Role from './Role'
import style from './Role.module.css'
import { FaPlusCircle } from 'react-icons/fa'

const Roles = ({ roles, onDelete }) => {
    return (
        <section className={style.roles}>
            <h2 className={style.rolesPageTitle}>
                Roles <FaPlusCircle />
            </h2>
            {roles.map((role, index) => (<
                Role
                key={index}
                role={role}
                onDelete={onDelete}
            />))}

        </section>
    )
}

export default Roles;
