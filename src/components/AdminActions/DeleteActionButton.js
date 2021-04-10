import { useContext } from 'react'
import { FaTrash } from 'react-icons/fa'
import AuthContext from '../../contexts/AuthContext';

const AddActionButton = ({ onClick }) => {

    const user = useContext(AuthContext);
    const email = user?.email;

    if (email !== "admin@example.com") {
        return (
            <></>
        )
    }
    console.log(user.email)

    return (
        <div className="addButton">
            <FaTrash style={{ cursor: 'pointer' }} onClick={onClick} />
        </div>
    )
}

export default AddActionButton
