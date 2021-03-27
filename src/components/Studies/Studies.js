import Study from './Study'
import style from './Studies.module.css'

const Studies = ({ studies }) => {
    return (
        <section className={style.studies}>
            <h2 className={style.studiesPageTitle}>
                Research Focus
            </h2>
            {studies.map((study, index) => (<
                Study
                key={index}
                study={study}
            />))}

        </section>
    )
}

export default Studies;
