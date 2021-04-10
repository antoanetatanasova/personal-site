import Role from './Role'
import style from './Role.module.css'
import AddActionButton from '../AdminActions/AddActionButton'
// import { FaPlusCircle } from 'react-icons/fa'

const Roles = ({ roles, onDelete }) => {
    return (
        <section className={style.roles}>
            <h2 className={style.rolesPageTitle}>Roles<AddActionButton path="/roles/add" />
                {/* Roles <a href="/roles/add"><FaPlusCircle /></a> */}
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
