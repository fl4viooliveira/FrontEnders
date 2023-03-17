import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navibar() {
  return (
    <Navbar collapseOnSelect expand="lg" id="navbar" bg="dark">
      <Container>
        <Link className="navbar-brand" to="/"><img src="http://api.fl4v.io/wp-content/uploads/2023/03/F.Enders-1.png" width="50"/></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="linkname">Home</NavLink>
            <NavLink to="/services" className="linkname">Services</NavLink>
            <NavLink to="/team" className="linkname">Team</NavLink>
          </Nav>
          <Nav>
            <NavLink to="/contactpage">Contact us</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
