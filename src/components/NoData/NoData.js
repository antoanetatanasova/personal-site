import { FaRegImages, FaRegFileAlt, FaRegFolderOpen } from 'react-icons/fa'
import style from './NoData.module.css'

const NoData = () => {
    return (
        <section className={style.noData}>
            <FaRegImages /> <FaRegFileAlt/> <FaRegFolderOpen />
            <p>No Data Available</p>
        </section>
    )
}

export default NoData
