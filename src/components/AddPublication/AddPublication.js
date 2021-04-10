import { useState } from 'react';
import Button from '../shared/Button';

const AddPublication = ({ onAdd }) => {

    const [title, setTitle] = useState('');
    const [book, setBook] = useState('');
    const [city, setCity] = useState('');
    const [year, setYear] = useState('');
    const [pages, setPages] = useState('');

    let infoMessages = [];

    const onSubmit = (e) => {
        e.preventDefault();

        if (title.length < 3) {
            infoMessages.push("Title must be more than 3 symbols")
        }

        if (book.length < 3) {
            infoMessages.push("Book must be more than 3 symbols")
        }

        if (infoMessages.length > 0) {
            infoMessages.forEach(function (item) {
                alert(item)
            })
            return;
        }

        onAdd({ title, book, city, year, pages });
        setTitle('');
        setBook('');
        setCity('');
        setYear('');
        setPages('');
    }

    return (
        <section className="formWrapper">

            <form className="form" onSubmit={onSubmit}>
                <legend>New Publication</legend>
                <div className="input">
                    <label>Title</label>
                    <input
                        type="text"
                        placeholder='Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="input">
                    <label>Book</label>
                    <input
                        type="text"
                        placeholder='Book'
                        value={book}
                        onChange={(e) => setBook(e.target.value)} />
                </div>
                <div className="input">
                    <label>City</label>
                    <input
                        type="text"
                        placeholder='City'
                        value={city}
                        onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="input">
                    <label>Year</label>
                    <input
                        type="text"
                        placeholder='Year'
                        value={year}
                        onChange={(e) => setYear(e.target.value)} />
                </div>
                <div className="input">
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

export default AddPublication;