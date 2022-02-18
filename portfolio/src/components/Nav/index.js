import React from 'react';



function Nav(props) {

    const {
        categories,
        setCurrentCategory,
        currentCategory
    } = props;


    return(
        <header className="flex-row px-1">
            <h2>
                <a href="/" data-testid="link">
                    Max's React Portfolio
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className='mx-2'>
                        <a href="#about" data-testid="about" onClick={() => setCurrentCategory(categories[0])}>
                            About me
                        </a>
                    </li>
                    <li className='mx-2'>
                        <a href="#portfolio" data-testid="portfolio" onClick={() => setCurrentCategory(categories[1])}>
                            Portfolio
                        </a>
                    </li>
                    <li className='mx-2'>
                        <a href="#contact" data-testid="contact-me" onClick={() => setCurrentCategory(categories[2])}>
                            Contact Me
                        </a>
                    </li>
                    <li className='mx-2'>
                        <a href="#resume" data-testid="resume" onClick={() => setCurrentCategory(categories[3])}>
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;