import style from './Role.module.css';
// import Button from './../shared/Button'
import DeleteActionButton from '../AdminActions/DeleteActionButton';
// import EditActionButton from '../AdminActions/EditActionButton';

const Role = ({ role, onDelete }) => {
    return (
        <article className={style.role}>
            <div className={style.roleWrapper}>
                <div className={style.roleTitleWrapper}>
                    <h3>
                        {role.role} at {role.institution}
                    </h3>
                    <div className={style.roleActionsWrapper}>
                        {/* <EditActionButton onClick={() => onEdit(role.id)} /> */}
                        <DeleteActionButton onClick={() => onDelete(role.id)} />
                    </div>

                </div>
                <p>
                    {role.description}
                </p>
                <p>{role.years}</p>
                {/* <Button text="Details" /> */}
            </div>
        </article>
    )
}

export default Role;