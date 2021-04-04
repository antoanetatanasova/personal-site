import React from 'react'
import {auth} from '../../utils/firebase'
import { FaUser, FaKey } from 'react-icons/fa'
import Button from '../shared/Button';


const Register = ({
    history
}) => {
    const onRegisterFormSumbitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("User registered");
            history.push('/');
        })

        console.log(email, password);
    }

    return (
        <section className="formWrapper">
            <form onSubmit={onRegisterFormSumbitHandler} className="form">
                <legend className="legend">Register</legend>
                <p className="input">
                    <label htmlFor="email"><FaUser /></label>
                    <input type="email" name="email" id="email" placeholder="email" />
                </p>
                <p className="input">
                    <label htmlFor="password"><FaKey /></label>
                    <input type="password" name="password" id="password" placeholder="password" />
                </p>
                <p className="input">
                    <label htmlFor="rePassword"><FaKey /><FaKey /></label>
                    <input type="password" name="rePassword" id="rePassword" placeholder="repeat password" />
                </p>
                <Button text="Register" />
            </form>
        </section>
    )
}

export default Register
