import { useContext } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import AuthContext from '../../contexts/AuthContext';

const AddActionButton = ({ path }) => {

    const user= useContext(AuthContext);
    const email = user?.email;

    if (email !== "admin@example.com") {
        return (
            <></>
        )
    }

    return (
        <div className="addButton">
            <a href={path}><FaPlusCircle style={{ cursor: 'pointer' }} /></a>            
        </div>
    )
}

export default AddActionButton
