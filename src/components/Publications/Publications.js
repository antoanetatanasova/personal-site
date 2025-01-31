import Publication from './Publication'
import style from './Publication.module.css'
// import { FaPlusCircle } from 'react-icons/fa'
import AddActionButton from '../AdminActions/AddActionButton'
// import AddActionButton from '../AdminActions/AddActionButton'

const Publications = ({ publications, onDelete, onEdit }) => {
    return (
        <section className={style.publications}>
            <h2 className={style.publicationsPageTitle}>
                Publications
                <span >
                    <AddActionButton path="/publications/add" />
                    {/* <a href="/publications/add" style={{color:"#8D3FD0"}}><FaPlusCircle className={style.plusButton} /></a> */}
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
