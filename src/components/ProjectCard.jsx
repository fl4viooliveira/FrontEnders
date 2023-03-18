import React from "react";
import proj1 from "../assets/frontEnd.png";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function ProjectCard() {
  return (
    <div class="project-card">
    <Card style={{ width: '25rem'}}>
    <Card.Img variant="top" src={proj1} />
    <Card.Body>
      <Card.Title>example</Card.Title>
      <Card.Text>
       Code Refactor for Horiseon Website.
       Updated code to semantic HTML and adding alt attributes to images.
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Code Refactor</ListGroup.Item>
      <ListGroup.Item>HTML - CSS</ListGroup.Item>
      <ListGroup.Item>Project #1 Bootcamp</ListGroup.Item>
      
    </ListGroup>
      <Card.Link className="project-link" href="https://github.com/francostroff/Horiseon-Code-Refactor">GitHub</Card.Link>
      <Card.Body>
     </Card.Body>
</Card>
  
  </div>

   
   );
}

export default ProjectCard;
