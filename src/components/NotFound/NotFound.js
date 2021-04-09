import style from './NotFound.module.css'
import { GiScarabBeetle } from 'react-icons/gi'

const NotFound = () => {
    return (
        <section className={style.notFound}>
               <GiScarabBeetle className={style.scarabIcon} />
               <p>Oops! Wrong Way...</p>
        </section>
    )
}

export default NotFound;
