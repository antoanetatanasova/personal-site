import style from './Publication.module.css';
import { useState } from 'react'
import { FaBookOpen } from 'react-icons/fa';
import Button from '../shared/Button';
import DeleteActionButton from '../AdminActions/DeleteActionButton';
// import EditActionButton from '../AdminActions/EditActionButton';

const Publication = ({ publication, onDelete, onEdit }) => {

    const [readsCount, setReadsCount] = useState(0)

    function onReadHandler() {
        setReadsCount(function (prev) {
            return prev + 1;
        })
    }

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
                <Button text="read it" onClick={onReadHandler} />
                <div style={{ textAlign: "center" }}>{readsCount} reads <FaBookOpen /></div>
            </div>
        </article>
    )
}

export default Publication;