import React from 'react';


function Nav(props) {

    const {
        categories,
        setCurrentCategory,
        currentCategory
    } = props;


    return(
        <nav className="navbar navbar-light justify-content-center">
                <ul className="nav nav-tabs">
                <li className='nav-item'>
                        <a href="#about" data-testid="about" className="nav-link" onClick={() => setCurrentCategory(categories[0])}>
                            Max's Portfolio Site
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="#about" data-testid="about" className="nav-link" onClick={() => setCurrentCategory(categories[0])}>
                            About me
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="#portfolio" data-testid="portfolio" className="nav-link" onClick={() => setCurrentCategory(categories[1])}>
                            Portfolio
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="#contact" data-testid="contact-me" className="nav-link" onClick={() => setCurrentCategory(categories[2])}>
                            Contact Me
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="#resume" data-testid="resume" className="nav-link" onClick={() => setCurrentCategory(categories[3])}>
                            Resume
                        </a>
                    </li>
                </ul>
                </nav>
    );
}

export default Nav;