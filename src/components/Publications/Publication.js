import style from './Publication.module.css';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

const Publication = ({ publication }) => {
    return (
        <article className={style.publication}>
            <div className={style.publicationWrapper}>
                <h3>
                    {publication.title},
                </h3>
                <p>
                    {publication.book}, {publication.city}, {publication.year}, {publication.pages}.
                </p>
            </div>
            <div className={style.likeWrapper}>
                <FaRegHeart /><FaHeart /> 2 liked this
            </div>
        </article>
    )
}

export default Publication;