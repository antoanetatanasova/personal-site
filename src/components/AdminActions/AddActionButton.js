import { FaPlusCircle } from 'react-icons/fa'

const AddActionButton = ({ user, path }) => {
    if (user !== "admin@example.com") {
        return (
            <>{user}</>
        )
    }
    console.log(user)

    return (
        <div className="addButton">
            <a href={path}><FaPlusCircle /></a>            
        </div>
    )
}

export default AddActionButton
