import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
require("./script.css");

export default class NavBar extends Component {
    render() {
        return (
            <div>
  <Navbar className="NavText" bg="dark" variant="dark">
    <Navbar.Brand className="NavText" href="#home">Long Huynh</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Projects</Nav.Link>
      <Nav.Link href="#pricing">Contact Me</Nav.Link>
    </Nav>

  </Navbar>
            </div>
        )
    }
}
