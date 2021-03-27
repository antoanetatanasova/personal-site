import { useState, useEffect } from 'react';
import Publications from './Publications';

const PublicationsPage = () => {
    
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        const getPublications = async () => {
            const tasksFromServer = await fetchPublications();
            setPublications(tasksFromServer);
        }
        getPublications();
    }, [])

    // Fetch Publications
    const fetchPublications = async () => {
        const res = await fetch('http://localhost:5000/publications')
        const data = await res.json();
        return data;
    }

    return (
        <div className="publications">
           <Publications publications={publications} />
        </div>
    )
}

export default PublicationsPage;
