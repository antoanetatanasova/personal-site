import { useState } from 'react';
import Button from '../shared/Button';

const AddRole = ({ onAdd }) => {
    const [institution, setInstitution] = useState('');
    const [url, setUrl] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [years, setYears] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!title) {
            alert('Please, add a title');
            return;
        }

        onAdd({ institution, url, imageUrl, title, years, description });
        setInstitution('');
        setUrl('');
        setImageUrl('');
        setTitle('');
        setYears('');
        setDescription('');
    }

    return (
        <section className="formWrapper">

            <form className="form" onSubmit={onSubmit}>
                <legend>New Role</legend>
                <div className="input">
                    <label>Institution</label>
                    <input
                        type="text"
                        placeholder='Institution'
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)} />
                </div>
                <div className="input">
                    <label>URL</label>
                    <input
                        type="text"
                        placeholder='URL'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)} />
                </div>
                <div className="input">
                    <label>Image URL</label>
                    <input
                        type="text"
                        placeholder='Image URL'
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)} />
                </div>
                <div className="input">
                    <label>Title</label>
                    <input
                        type="text"
                        placeholder='Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="input">
                    <label>Years</label>
                    <input
                        type="text"
                        placeholder='Years'
                        value={years}
                        onChange={(e) => setYears(e.target.value)} />
                </div>
                <div className="input">
                    <label>Description</label>
                    <input
                        type="text"
                        placeholder='Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </div>
                
                <Button text="Save Role" />
            </form>
        </section>
    )
}

export default AddRole;
