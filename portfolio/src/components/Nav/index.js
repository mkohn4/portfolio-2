import React, {useState} from 'react';


function Nav(props) {


    const {
        categories,
        setCurrentCategory,
        currentCategory
    } = props;
//if openMenu = 0, menu is closed, else menu open
    return(
        <nav className="nav navbar-light bg-light">
                        <a href="#about" data-testid="about" className="navbar-brand" onClick={() => setCurrentCategory(categories[0])}>
                            Max's Portfolio Site
                        </a>
                <ul className="nav nav-tabs">
                    <li className='nav-item'>
                        <a href="#about" data-testid="about" className={currentCategory === categories[0] ? 'nav-link active' : 'nav-link'} onClick={() => setCurrentCategory(categories[0])}>
                            About me
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="#portfolio" data-testid="portfolio" className={currentCategory === categories[1] ? 'nav-link active' : 'nav-link'} onClick={() => setCurrentCategory(categories[1])}>
                            Portfolio
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="#contact" data-testid="contact-me" className={currentCategory === categories[2] ? 'nav-link active' : 'nav-link'} onClick={() => setCurrentCategory(categories[2])}>
                            Contact Me
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="#resume" data-testid="resume" className={currentCategory === categories[3] ? 'nav-link active' : 'nav-link'} onClick={() => setCurrentCategory(categories[3])}>
                            Resume
                        </a>
                    </li>
                </ul>
        </nav>
    );
}

export default Nav;