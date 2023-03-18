import Card from 'react-bootstrap/Card';
import '../styles/header.css'
import image1 from "../assets/mainImage.png";

function Header() {
  return (
    <Card className="text-center">
    <Card.Img variant="top" src={image1}/>
    </Card>
  );
}

export default Header;
