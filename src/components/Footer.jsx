import React from 'react';
import Container from 'react-bootstrap/Container';
import "../styles/footer.css"

export default function Footer() {
  return (
    <div class="footer">
      <Container >
      <div className="row text-center">
        <div className="col-md-4">
          <h4>©2023 frontEnders</h4>
          <p>For more info contact us</p>
        </div>
        <div className="col-md-4">
          <h4>Our repositories:</h4>
            <li className="list-unstyled"><a href="https://github.com/fl4viooliveira" target="_blank">Flavio Oliveira</a></li>
            <li className="list-unstyled"><a href="https://github.com/francostroff" target="_blank">Franco Stroff</a></li>
            <li className="list-unstyled"><a href="https://github.com/Moobell1212" target="_blank">Elspeth Meakin</a></li>
          </div>
        <div className="col-md-4">
          <h4>Contact us:</h4>
          <li className="list-unstyled"><a href="https://github.com/fl4viooliveira/FrontEnders" target="_blank">Via the repo</a></li>
          <li className="list-unstyled"><a href="/contactpage" target="_blank">Via the contact page</a></li>
        </div>
        </div>
        </Container>
      </div>
  )
}
