import { useState, useEffect } from 'react';
import Roles from './Roles';

const RolesPage = () => {
    
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        const getRoles = async () => {
            const tasksFromServer = await fetchRoles();
            setRoles(tasksFromServer);
        }
        getRoles();
    }, [])

    // Fetch Roles
    const fetchRoles = async () => {
        const res = await fetch('http://localhost:5000/roles')
        const data = await res.json();
        return data;
    }

    return (
        <div className="roles">
           <Roles roles={roles} />
        </div>
    )
}

export default RolesPage;
