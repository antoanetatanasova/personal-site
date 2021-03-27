import style from './Studies.module.css';

const Study = ({ study }) => {
    return (
        <article className={style.study}>
            <div className={style.studyWrapper}>
                <h3>
                    {study.title}
                </h3>
                <p>
                   {study.description} 
                </p>
            </div>
        </article>
    )
}

export default Study;