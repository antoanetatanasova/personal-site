import { useState, useContext } from 'react';
import AuthContext from '../../contexts/AuthContext'
import AddRole from './AddRole'
import NotFound from '../NotFound/NotFound'

const AddRolePage = () => {

    const [roles, setRoles] = useState([]);

    const user = useContext(AuthContext);

    // Add Role
    const addRole = async (role) => {

        console.log(role);
        const res = await fetch('http://localhost:5000/roles', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(role)
        })

        const data = await res.json();
        setRoles([...roles, data]);
    }

    if (!user) {
        return (
            <>
                <NotFound />
            </>
        )
    }

    return (

        <div className="roles">
            <AddRole onAdd={addRole} />
        </div>
    )
}

export default AddRolePage;
