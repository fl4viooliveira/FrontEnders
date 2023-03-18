import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/navbar.css";
export default function Navibar() {
  return (
    <Navbar collapseOnSelect expand="lg" id="navbar" bg="dark">
      <Container>
        <Link className="navbar-brand" to="/">
          <img
            src="http://api.fl4v.io/wp-content/uploads/2023/03/F.Enders-1.png"
            width="50"
            alt="FontEnder"
          />
        </Link>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="bg-primary text-light"
        />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="me-auto">
            <NavLink to="/" className="linkname m-4">
              Home
            </NavLink>
            <NavLink to="/about" className="linkname m-4">
              About us
            </NavLink>
            <NavLink to="/services" className="linkname m-4">
              Services
            </NavLink>
            <NavLink to="/team" className="linkname m-4">
              Team
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
