import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <Navbar collapseOnSelect expand="lg" className="navbar">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="/">
              <img
                alt=""
                src="https://i.imgur.com/aceZ4sh.png?1"
                width="40"
                height="40"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/water-fountains">Water Fountains</Nav.Link>
              <Nav.Link href="/trash-cans">Trash Cans</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
