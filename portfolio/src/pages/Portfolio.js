import React, {useState} from 'react';
import ProjectCard from '../components/Project';
import {Container, Row, Col, CardGroup} from 'react-bootstrap';

function Portfolio() {

const [projects] = useState([
    {
        name: 'Budget Tracker',
        github: 'https://github.com/mkohn4/budget-tracker',
        deployed: 'https://damp-sierra-61161.herokuapp.com/',
        description: 'This is a PWA Budget Tracker Application',
        img: './images/budget-tracker.png'
    },
    {
        name: 'Pet Project',
        github: 'https://github.com/mkohn4/pet-project',
        deployed: 'https://warm-springs-61498.herokuapp.com/',
        description: 'A community for Pet Owners to collaborate',
        img: './images/pet-project.png'
    },
    {
        name: 'Note Taker App',
        github: 'https://github.com/mkohn4/note-taker-app',
        deployed: 'https://frozen-woodland-95191.herokuapp.com/notes',
        description: 'A Note Taking application to showcase CRUD functionality in DBs',
        img: './images/note_taker.png'
    },
    {
        name: 'Skipt',
        github: 'https://github.com/mkohn4/skipt-clone',
        deployed: 'https://github.com/mkohn4/skipt-clone',
        description: 'An application to find Cheap Flight deals from or to any destination',
        img: './images/skipt_photo.png'
    },
    {
        name: 'Weather Tracker',
        github: 'https://github.com/mkohn4/weather-tracker',
        deployed: 'https://mkohn4.github.io/weather-tracker/',
        description: 'A Weather Dashboard to check current weather in any city and 5 day forecast',
        img: './images/weather-dashboard.png'
    },
    {
        name: 'WorkDay Scheduler',
        github: 'https://github.com/mkohn4/scheduler',
        deployed: 'https://mkohn4.github.io/scheduler/',
        description: 'Scheduling Application to plan your day hour by hour',
        img: './images/work-day-scheduler.png'
    },
    {
        name: 'Password Generator',
        github: 'https://github.com/mkohn4/password-generator',
        deployed: 'https://mkohn4.github.io/password-generator/',
        description: 'A Secure Password generator application',
        img: './images/password.png'
    },
    {
        name: 'Keep',
        github: 'https://github.com/mkohn4/keep',
        deployed: 'https://ancient-depths-61432.herokuapp.com/',
        description: 'A To-Do Application to keep track of To-Dos and Dones',
        img: './images/Keep.png'
    }
])

    return (
        <section className="container">
            <h1 id="portfolio">Portfolio</h1>
            <>
            <Container>
                <Row className="justify-content-md-center">
                {projects.map(project => (
                <Col>
                <CardGroup>
                <ProjectCard
                    project={project}
                    key={project.github}>
                    </ProjectCard>
                    </CardGroup>
                 </Col>

                ))}
                </Row>
            </Container>
            </>
            
        </section>
    );
}

export default Portfolio;