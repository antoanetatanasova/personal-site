import { useState } from 'react';
import AddPublication from './AddPublication'

const AddPublicationsPage = () => {

    const [publications, setPublications] = useState([]);

    // Add Publication
    const addPublication = async (publication) => {

        console.log(publication);
        const res = await fetch('http://localhost:5000/publications', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(publication)
        })

        const data = await res.json();
        setPublications([...publications, data]);

        const id = Math.floor(Math.random() * 10000) + 1;
        const newPublication = { id, ...publication };
        setPublications([...publications, newPublication]);
        console.log(publication);
    }

    return (

        <div className="publications">
            <AddPublication onAdd={addPublication} />
        </div>
    )
}

export default AddPublicationsPage;
