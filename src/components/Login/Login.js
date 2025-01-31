import { auth } from '../../utils/firebase';
import { FaUser, FaKey } from 'react-icons/fa'
import Button from '../shared/Button';

const Login = ({ history }) => {

    const onLoginFormSumbitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        let infoMessages = [];

        if (email.length === 0 || password.length === 0) {

            infoMessages.push('All fields are required!');

        } else if (password.length < 6) {

            infoMessages.push('Password must be at least 6 symbols!');
        }

        if (infoMessages.length > 0) {
            infoMessages.forEach(function (item) {
                alert(item)
            })
            return;
        }

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log(userCredential);
                history.push('/');
            })

    }

    return (
        <section className="formWrapper">
            <form onSubmit={onLoginFormSumbitHandler} className="form">
                <legend className="legend">Login</legend>
                <p className="input">
                    <label htmlFor="email"><FaUser /></label>
                    <input type="email" name="email" id="email" placeholder="email" />
                </p>
                <p className="input">
                    <label htmlFor="password"><FaKey /></label>
                    <input type="password" name="password" id="password" placeholder="password" />
                </p>
                <Button text="Login" />
            </form>
        </section>
    )
}

export default Login;
