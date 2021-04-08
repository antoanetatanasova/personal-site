import { useState, useEffect } from 'react';
import Roles from './Roles';
import NoData from './../NoData/NoData'

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

    // Fetch Role
    // const fetchRole = async (id) => {
    //     const res = await fetch('http://localhost:5000/roles/${id}')
    //     const data = await res.json();
    //     return data;
    // }

    // Add Role
    // const AddRole = async(role) => {
    //     const res = await fetch('http://localhost:5000/roles', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(role)
    // })

    // const data = await res.json();
    // setRoles([...roles, data]);
    // }

    // Delete Role
  const deleteRole = async (id) => {
    await fetch(`http://localhost:5000/roles/${id}`, {
      method: 'DELETE'
    })
    setRoles(roles.filter((role) => role.id !== id));
    console.log('delete', id);
  };

    return (
        <div className="roles">
           {roles.length > 0 ? <Roles roles={roles} onDelete={deleteRole} /> : <NoData />}
        </div>
    )
}

export default RolesPage;
