import style from './../../components/Interests/Interests.module.css';
import { FaUniversity, FaLanguage, FaReadme } from 'react-icons/fa'
import { GiArchiveResearch } from 'react-icons/gi'
import { IoLanguage } from 'react-icons/io5'

const Interests = () => {
    return (
        <section className={style.interests}>
            <ul className={style.interestsList}>
                <li className={style.interestsListItem}>
                    <h4>History</h4>
                    <p className={style.interestsListIcon} style={{ "textAlign": "center" }}><FaUniversity /></p>
                    <p>My major research interests are directed towards the European models of modernization of the Ottoman Empire during the Eighteenth Century, as well as toward the European-Ottoman relations interconected with those modernization processes.</p>
                </li>
                <li className={style.interestsListItem}>
                    <h4>Translation studies</h4>
                    <p className={style.interestsListIcon} style={{ "textAlign": "center" }}><GiArchiveResearch /></p>
                    <p>I am tempted to explain the strategies to translate the “untranslatability”: lacunas or liguistic gaps. Part of my research interest in focused on explaining the ways to translate the culture-specific material elements or realia.</p>
                </li>
                <li className={style.interestsListItem}>
                    <h4>Translation</h4>
                    <p className={style.interestsListIcon} style={{ "textAlign": "center" }}><IoLanguage/></p>
                    <p>I take pride in being a published translator, when in 2013 I took part in translating a section of Pierre Michon's book <span>Corps du roi</span>. My prefered language pair is French-Bulgarian.</p>
                </li>
            </ul>

        </section>
    )
}

export default Interests;
