import React from 'react';
import {Card, Button} from 'react-bootstrap';

function ProjectCard({project}) {
    const {
        name,
        github,
        deployed,
        description,
        img
    } = project;

console.log(name);
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
            <Button href={deployed} variant="primary">Check Me Out!</Button>
            <Button href={github} variant="primary">Github Repo</Button>
        </Card.Body>
        </Card>
    );
}

export default ProjectCard;