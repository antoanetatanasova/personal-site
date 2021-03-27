import style from './../Profile/Profile.module.css';

const Profile = () => {
    return (
        <section className={style.profile}>
            <img className={style.profilePicture} src="https://res.cloudinary.com/the-potential/image/upload/v1615903169/personal-site/antoinette_ezrg3f.jpg"></img>
            <article className={style.profileDescription}>
                <p>Hi, my name is Antoaneta. I was born in Sofia, but at some point of my live I had the opportunity to live in two of the most intriguing cities of the world: Paris and Istanbul. I reached to these cities because of the desire to read more than anyone else in the world and even to read what no-one has read before me. This dream was fully accomplished when in 2015 I worked on creating the inventory of the Archive of the American Board of Missions. At that time I was the first one who opened some of the documents, forgotten long ago.</p>
            </article>
        </section>
    )
}

export default Profile;
