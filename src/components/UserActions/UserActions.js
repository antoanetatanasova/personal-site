import React from 'react'

const UserActions = ({ user }) => {
    if (user) {
        return (
            <section className="userActions">
                <ul>
                    <li>
                        <p style={{ "fontWeight": "bold", "marginTop": "0px" }}>
                            Secret-Zone
                        </p>
                        <p> Welcome, {user?.email}!</p>
                    </li>
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
                <li>
                    <p style={{ "fontWeight": "bold", "marginTop": "0px" }}>
                        Secret-Zone
                    </p>
                    <p>
                        Only logged in users have access
                    </p>
                </li>
                <a href="/login"><li>Login</li></a>
                <li>or</li>
                <a href="/register"><li>Register</li></a>
            </ul>
        </section>
    )
}

export default UserActions
