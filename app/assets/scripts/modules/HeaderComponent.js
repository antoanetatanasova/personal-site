import React from 'react';
import LogoComponent from './LogoComponent';
import NavHeaderComponent from './NavHeaderComponent';

function HeaderComponent() {
    return (
        <header className="site-header">
            <LogoComponent/>
            <NavHeaderComponent />
        </header>
    );
}

export default HeaderComponent;