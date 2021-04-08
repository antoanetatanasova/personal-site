import { useState } from 'react';
import EditPublication from './EditPublication';

const EditPublicationPage = () => {

    const [publications, setPublications] = useState([]);

    // Fetch Publication
    const fetchPublication = async (id) => {
        const res = await fetch(`http://localhost:5000/publications/${id}`)
        const data = await res.json();
        return data;
    }

    // Edit Publication
    const editPublication = async (id) => {

        const publicationToUpdate = await fetchPublication(id);
        const updPublication = {
            ...publicationToUpdate,
            title: publicationToUpdate.title,
            book: publicationToUpdate.book,
            city: publicationToUpdate.city,
            year: publicationToUpdate.year,
            pages: publicationToUpdate.pages
        };
        const res = await fetch(`http://localhost:5000/publications/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updPublication)
        })

        const data = await res.json();
        setPublications(publications.map((publication) =>
            publication.id === id ? {
                ...publication, title: data.title, book: publicationToUpdate.book,
                city: publicationToUpdate.city,
                year: publicationToUpdate.year,
                pages: publicationToUpdate.pages
            } : publication
        ));
    }

    return (

        <div className="publications">
            <EditPublication onEdit={editPublication} />
        </div>
    )

}

export default EditPublicationPage;
