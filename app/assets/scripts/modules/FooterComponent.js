import React from 'react';

function FooterComponent() {
    return (
        <footer className="footer">
            <p>
                Follow me or contact me:
            </p>
            <ul className="footer--contact-info">
                <li className="footer--contact-info-item"><a className="footer--contact-info-item-link" href="https://www.researchgate.net/profile/Antoaneta-Atanasova"><i class="fab fa-researchgate"></i></a></li>
                <li className="footer--contact-info-item"><a className="footer--contact-info-item-link" href="https://github.com/antoanetatanasova"><i class="fab fa-github"></i></a></li>
                <li className="footer--contact-info-item"><a className="footer--contact-info-item-link" href="https://www.linkedin.com/in/antoanetatanasova/"><i class="fab fa-linkedin"></i></a></li>
            </ul>
            <p>
                Copyright &copy; 2021. All rights reserved
            </p>
        </footer>
    );
}

export default FooterComponent;