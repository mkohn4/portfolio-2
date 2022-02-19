import React from 'react';

function Resume() {
    return (
        <section className="my-5 text-center">
            <h1 id="resume">Resume</h1>
            <br/>
            <div className="container">
                <div className="row">
                <a href="./images/Resume.pdf" download>
                    <button type="button"className="btn btn-primary">DownloadMe</button>
                </a>
                </div>
                <br/>
                <div className="row">
                    <embed src="./images/Resume.pdf" alt="Max's Resume" style={{height:"72rem"}}></embed>
                </div>
            </div>
        </section>
    );
}

export default Resume;