import { useState } from 'react';
import AddRole from './AddRole'

const AddRolePage = () => {

    const [roles, setRoles] = useState([]);

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

    return (

        <div className="roles">
            <AddRole onAdd={addRole} />
        </div>
    )
}

export default AddRolePage;
