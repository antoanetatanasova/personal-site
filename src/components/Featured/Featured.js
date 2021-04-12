import style from './../../components/Featured/Featured.module.css'

import Button from './../shared/Button';

const Featured = () => {

    const links = {
        bloomsburyUrl: "https://www.bloomsbury.com/uk/european-revolutions-and-the-ottoman-balkans-9780755603282/",
        googlebooksUrl: "https://books.google.bg/books?hl=en&lr=&id=wWjDDwAAQBAJ&oi=fnd&pg=PA65&ots=MAUAUK229u&sig=XpWo7E4YHIgI1MMlnKe_KWHZk_0&redir_esc=y#v=onepage&q&f=false",
    }

    return (
        <article className={style.featured}>
            <div className={style.featuredWrapper}>
                <h4 className={style.featuredSectionTitle}>Featured Publication</h4>
                <h2 className={style.featuredMainTitle}>Military Reforms as a Diplomatic Bargaining Chip</h2>
                <h3>French-Ottoman Relations at the End of the Eighteenth Century</h3>
                <a href={links.bloomsburyUrl}> <Button text="More Info" /></a>
                <a href={links.googlebooksUrl}> <Button text="Read it" /></a>
                <h5 className={style.featuredSectionFooter}>in: European Revolutions and the Ottoman Balkans Nationalism, Violence and Empire in the Long Nineteenth-Century, Editor: Dimitris Stamatopoulos</h5>
            </div >
        </article >
    )
}

export default Featured;
