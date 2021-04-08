import { useState } from 'react';
import Button from '../shared/Button';
import style from './EditPublication.module.css'

const EditPublication = ({onEdit, publication}) => {

    const [title, setTitle] = useState(publication.title);
    const [book, setBook] = useState(publication.book);
    const [city, setCity] = useState(publication.city);
    const [year, setYear] = useState(publication.year);
    const [pages, setPages] = useState(publication.pages);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!title) {
            alert('Please, add a title');
            return;
        }

        onEdit({ title, book, city, year, pages });
    }

    return (
        <section className={style.formWrapper}>

            <form className={style.form} onSubmit={onSubmit}>
                <h2 style={{"text-align": "center"}}>Edit Publication</h2>
                <div className={style.input}>
                    <label>Title</label>
                    <input
                        type="text"
                        placeholder='Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className={style.input}>
                    <label>Book</label>
                    <input
                        type="text"
                        placeholder='Book'
                        value={book}
                        onChange={(e) => setBook(e.target.value)} />
                </div>
                <div className={style.input}>
                    <label>City</label>
                    <input
                        type="text"
                        placeholder='City'
                        value={city}
                        onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className={style.input}>
                    <label>Year</label>
                    <input
                        type="text"
                        placeholder='Year'
                        value={year}
                        onChange={(e) => setYear(e.target.value)} />
                </div>
                <div className={style.input}>
                    <label>Pages</label>
                    <input
                        type="text"
                        placeholder='Pages'
                        value={pages}
                        onChange={(e) => setPages(e.target.value)} />
                </div>
                <Button text="Save Publication" />
            </form>
        </section>
    )
}

export default EditPublication;
