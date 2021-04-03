import Publication from './Publication'
import style from './Publication.module.css'
import { FaPlusCircle } from 'react-icons/fa'

const Publications = ({ publications, onDelete, onEdit }) => {
    return (
        <section className={style.publications}>
            <h2 className={style.publicationsPageTitle}>
                Publications
                <span >
                    <a href="/publications/add" style={{color:"#8D3FD0"}}><FaPlusCircle className={style.plusButton} /></a>
                </span>
            </h2>
            {publications.map((publication, index) => (<
                Publication
                key={index}
                publication={publication}
                onEdit={onEdit}
                onDelete={onDelete}
            />))}

        </section>
    )
}

export default Publications;
