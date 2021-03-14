import React from 'react';

const NavHeaderComponent = () => {
    return (
        <ul className="primary-nav">
            <li className="primary-nav-item">Research</li>
            <li className="primary-nav-item">Publications</li>
            <li className="primary-nav-item">Roles</li>
            <li className="primary-nav-item"><i class="fas fa-user-secret"></i>Secret zone</li>
        </ul>
    );
}

export default NavHeaderComponent;