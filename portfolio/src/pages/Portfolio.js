import React, {useState} from 'react';
import ProjectCard from '../components/Project';

function Portfolio() {

const [projects] = useState([
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
            {projects.map(project => (
            <ProjectCard
                project={project}>
                </ProjectCard>
            ))}
        </section>
    );
}

export default Portfolio;