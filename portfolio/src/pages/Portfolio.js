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
        name: 'Project 1',
        github: 'commercial',
        deployed: 'test description',
        description: 'description',
        img: './images/0.jpg'
    },
    {
        name: 'Project 1',
        github: 'commercial',
        deployed: 'test description',
        description: 'description',
        img: './images/0.jpg'
    },
    {
        name: 'Project 1',
        github: 'commercial',
        deployed: 'test description',
        description: 'description',
        img: './images/0.jpg'
    }
])

    return (
        <section className="my-5">
            <h1 id="portfolio">Portfolio</h1>
            <>
            <Container>
                <Row className="justify-content-md-center">
                {projects.map(project => (
                <Col>
                <CardGroup>
                <ProjectCard
                    project={project}>
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