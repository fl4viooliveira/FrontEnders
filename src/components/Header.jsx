import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/header.css'
import image1 from "../assets/logo.png";

function Header() {
  return (
    <Card className="text-center">
      <Card.Header>frontEnders</Card.Header>
      <Card.Body>
      <Card.Img variant="top" src={image1}/>
       <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default Header;