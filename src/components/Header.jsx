import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/header.css'
import image1 from "../assets/logo.png";

function Header() {
  return (
    <Card className="text-center">
    <Card.Img variant="top" src={image1}/>
       <Button variant="dark">Click me</Button>
    
    </Card>
  );
}

export default Header;