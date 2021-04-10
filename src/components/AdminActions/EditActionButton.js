import { useContext } from 'react'
import { FaPen } from 'react-icons/fa'
import AuthContext from '../../contexts/AuthContext';

const AddActionButton = ({ onClick }) => {

    const user= useContext(AuthContext);
    const email = user?.email;

    if (email !== "admin@example.com") {
        return (
            <></>
        )
    }

    return (
        <div className="addButton">
            <FaPen style={{ cursor: 'pointer' }} onClick={onClick} />            
        </div>
    )
}

export default AddActionButton
