import { useState, useContext } from 'react';
import AddPublication from './AddPublication'
import AuthContext from '../../contexts/AuthContext'
import NotFound from '../NotFound/NotFound';

const AddPublicationsPage = () => {

    const [publications, setPublications] = useState([]);

    const user = useContext(AuthContext);
    const email = user?.email;

    // Add Publication
    const addPublication = async (publication) => {

        console.log(publication);
        console.log(user);
        const res = await fetch('http://localhost:5000/publications', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(publication)
        })

        const data = await res.json();
        setPublications([...publications, data]);

        // const id = Math.floor(Math.random() * 10000) + 1;
        // const newPublication = { id, ...publication };
        // setPublications([...publications, newPublication]);
        // console.log(publication);
    }

    if (email !== "admin@example.com") {
        return (
            <>
                <NotFound />
            </>
        )
    }

    return (

        <div className="publications">
            <AddPublication onAdd={addPublication} />
        </div>
    )
}

export default AddPublicationsPage;
