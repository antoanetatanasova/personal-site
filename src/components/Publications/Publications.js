import Publication from './Publication'
import style from './Publication.module.css'

const Publications = ({ publications }) => {
    return (
        <section className={style.publications}>
            <h2 className={style.publicationsPageTitle}>
                Publications
            </h2>
            {publications.map((publication, index) => (<
                Publication
                key={index}
                publication={publication}
            />))}

        </section>
    )
}

export default Publications
