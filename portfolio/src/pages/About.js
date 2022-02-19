import React from 'react';

function About() {
    return (
        <section className="my-5">
            <h1 id="about">About</h1>
                <div class="row justify-content-center">
                    <img src="./images/MaxHeadshot.JPG" alt="Picture of Max Kohn" className="pb-10"  style={{width: "30rem"}} />
                    <p style={{width: "50rem"}}>
                        I began my career in Web Development by working in implementation at a small startup company that was still a little rough around the edges.  The experience I gained in HTML, CSS, Javascript, XML, and JSON were born out of necessity to deliver workable solutions to customers.  I am now pursuing a track in Web Development to further my passion for UX/UI Design, elegant and useful tools, and to build the things I have always wanted to use for others who might want the same.  I look forward to connecting!
                    </p>
            </div>
        </section>
    );
}

export default About;