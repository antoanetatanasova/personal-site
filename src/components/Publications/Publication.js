import style from './Publication.module.css';
import { FaRegHeart, FaHeart, FaPen, FaTrash } from 'react-icons/fa';

const Publication = ({ publication, onDelete }) => {
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
                    <FaPen /> <FaTrash style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(publication.id)} />
                </div>
            </div>
            <div className={style.likeWrapper}>
                <FaRegHeart /> <FaHeart /> 2 liked this
            </div>
        </article>
    )
}

export default Publication;