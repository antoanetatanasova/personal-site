import { useState, useEffect } from 'react';
import Studies from './Studies';

const StudiesPage = () => {
    
    const [studies, setStudies] = useState([]);

    useEffect(() => {
        const getStudies = async () => {
            const tasksFromServer = await fetchStudies();
            setStudies(tasksFromServer);
        }
        getStudies();
    }, [])

    // Fetch Studies
    const fetchStudies = async () => {
        const res = await fetch('http://localhost:5000/research')
        const data = await res.json();
        return data;
    }

    return (
        <div className="studies">
           <Studies studies={studies} />
        </div>
    )
}

export default StudiesPage;
