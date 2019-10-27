import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/water-fountains">Water Fountains</Nav.Link>
              <Nav.Link href="/trash-cans">Trash Cans</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
