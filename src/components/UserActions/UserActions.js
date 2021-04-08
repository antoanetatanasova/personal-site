import React from 'react'

const UserActions = ({ user }) => {
    if (user) {
        return (
            <section className="userActions">
                <ul>
                    <li style={{ "fontWeight": "bold" }}>Welcome, {user?.email}!</li>
                    <a href="/game"><li>Play</li></a>
                    <li>or</li>
                    <a href="/logout"><li>Logout</li></a>
                </ul>
            </section>
        );
    }

    return (
        <section className="userActions">
            <ul>
                <li style={{ "fontWeight": "bold" }}>Only logged in users can play!</li>
                <a href="/login"><li>Login</li></a>
                <li>or</li>
                <a href="/register"><li>Register</li></a>
            </ul>
        </section>
    )
}

export default UserActions
