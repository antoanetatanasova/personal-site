import style from './../../components/Interests/Interests.module.css';
// import { FaUniversity } from 'react-icons/fa'
import { GiArchiveResearch, GiAncientColumns } from 'react-icons/gi'
import { IoLanguage } from 'react-icons/io5'

const Interests = () => {
    return (
        <section className={style.interests}>
            <ul className={style.interestsList}>
                <li className={style.interestsListItem}>
                    <h4>History</h4>
                    <GiAncientColumns className={style.interestsListIcon} />
                    <p>My major research interests are directed towards the European models of modernization of the Ottoman Empire during the Eighteenth Century, as well as toward the European-Ottoman relations interconected with those modernization processes.</p>
                </li>
                <li className={style.interestsListItem}>
                    <h4>Translation studies</h4>
                    <GiArchiveResearch className={style.interestsListIcon} />
                    <p>I am tempted to explain the strategies to translate the “untranslatability”: lacunas or liguistic gaps. Part of my research interest in focused on explaining the ways to translate the culture-specific material elements or realia.</p>
                </li>
                <li className={style.interestsListItem}>
                    <h4>Translation</h4>
                    <IoLanguage className={style.interestsListIcon}  />
                    <p>I take pride in being a published translator, when in 2013 I took part in translating a section of Pierre Michon's book <span>Corps du roi</span>. My prefered language pair is French-Bulgarian.</p>
                </li>
            </ul>

        </section>
    )
}

export default Interests;
