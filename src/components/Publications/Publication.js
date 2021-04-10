import style from './Publication.module.css';
// import { FaBookOpen } from 'react-icons/fa';
import Button from '../shared/Button';
import DeleteActionButton from '../AdminActions/DeleteActionButton';
// import EditActionButton from '../AdminActions/EditActionButton';

const Publication = ({ publication, onDelete, onEdit }) => {
    return (
        <article className={style.publication}>
            <div className={style.publicationWrapper}>
                <h3>
                    {publication.title},
                </h3>
                <p>
                    {publication.book}, {publication.city}, {publication.year}, {publication.pages}.
                </p>
                <div className={style.actionsWrapper}>
                    {/* <EditActionButton onClick={() => onEdit(publication.id)} /> */}
                    <DeleteActionButton onClick={() => onDelete(publication.id)} />
                </div>
            </div>
            <div className={style.likeWrapper}>
                <Button text="read it" />
                {/* <div style={{textAlign: "center"}}><FaBookOpen />{publication.reads} reads</div>  */}
            </div>
        </article>
    )
}

export default Publication;