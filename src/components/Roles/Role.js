import style from './Role.module.css';

const Role = ({ role }) => {
    return (
        <article className={style.role}>
            <div className={style.roleWrapper}>
                <h3>
                    {role.role} at {role.institution}
                </h3>
                <p>
                    {role.description}
                </p>
                <p>{role.years}</p>
            </div>
        </article>
    )
}

export default Role;