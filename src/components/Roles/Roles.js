import Role from './Role'
import style from './Role.module.css'

const Roles = ({ roles }) => {
    return (
        <section className={style.roles}>
            <h2 className={style.rolesPageTitle}>
                Roles
            </h2>
            {roles.map((role, index) => (<
                Role
                key={index}
                role={role}
            />))}

        </section>
    )
}

export default Roles;
