import { useState, useEffect } from 'react';
import Publications from './Publications';
import AddPublication from './../AddPublication/AddPublication'
import EditPublication from '../EditPublication/EditPublication';
import NoData from '../NoData/NoData';

const PublicationsPage = () => {

  const [showAddPublication, setShowAddPublication] = useState(false);

  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const getPublications = async () => {
      const publicationsFromServer = await fetchPublications();
      setPublications(publicationsFromServer);
    }
    getPublications();
  }, [])


  // Fetch Publications
  const fetchPublications = async () => {
    const res = await fetch('http://localhost:5000/publications')
    const data = await res.json();
    return data;
  }

  // Fetch Publication
  const fetchPublication = async (id) => {
    const res = await fetch(`http://localhost:5000/publications/${id}`)
    const data = await res.json();
    return data;
  }

  // Add Publication
  const addPublication = async (publication) => {

    const res = await fetch('http://localhost:5000/publications', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(publication)
    })

    const data = await res.json();
    setPublications([...publications, data]);
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

  // Delete Publications
  const deletePublication = async (id) => {
    await fetch(`http://localhost:5000/publications/${id}`, {
      method: 'DELETE'
    })
    setPublications(publications.filter((publication) => publication.id !== id));
    console.log('delete', id);
  };

  return (

    <div className="publications">
      {/* <Publications publications={publications} /> */}
      {showAddPublication && <AddPublication onAdd={addPublication} />}
      {publications.length > 0 ? <Publications publications={publications} onDelete={deletePublication} onEdit={editPublication} /> : <NoData />}
    </div>
  )
}

export default PublicationsPage;
