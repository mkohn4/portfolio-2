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
        <Card style={{ width: '18rem'}} className="d-flex align-items-stretch h-100">
        <Card.Img variant="top" src={img} />
        <Card.Body className="d-flex flex-column">
            <Card.Title>{name}</Card.Title>
            <Card.Text className="mb-4">
            {description}
            </Card.Text>
            <Button href={deployed} variant="primary" >Check Me Out!</Button>
            <Button href={github} variant="secondary" >Github Repo</Button>
        </Card.Body>
        </Card>
    );
}

export default ProjectCard;