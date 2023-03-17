import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/header.css'

function Header() {
  return (
    <Card className="text-center">
      <Card.Header>frontEnders</Card.Header>
      <Card.Body>
        <Card.Title>Welcome to frontEnders</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default Header;