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
        <Card style={{ width: '18rem'}} className="card d-flex align-items-stretch h-100">
        <Card.Img variant="top" src={img} />
        <Card.Body className="d-flex flex-column">
            <Card.Title>{name}</Card.Title>
            <Card.Text className="mb-4">
            {description}
            </Card.Text>
            <>
            <div className='button-wrapper'>
                <Button href={deployed} variant="primary" className="col-12 mb-3" >Check Me Out!</Button>
                <Button href={github} variant="primary" className="col-12" >Github Repo</Button>
            </div>
            </>

        </Card.Body>
        </Card>
    );
}

export default ProjectCard;