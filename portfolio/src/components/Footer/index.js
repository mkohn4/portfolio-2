import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4 d-flex justify-content-between ">
        <div className="icons d-flex justify-content-between w-10">
            <a href="https://github.com/mkohn4">
                <img src="./images/GitHub.png" alt="Max Github"/>
            </a>
            <a href="https://www.linkedin.com/in/maxwellkohn/">
                <img src="./images/LI.png" alt="Max LinkedIn"/>
            </a>
            <a href="https://www.instagram.com/maxuuush//">
                <img src="./images/Instagram.png" alt="Max Instagram"/>
            </a>
        </div>
      <div >&copy;2022 by Max Kohn</div>
    </footer>
  );
};

export default Footer;