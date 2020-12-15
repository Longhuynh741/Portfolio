import React, { Component } from 'react'
import { Navbar, Nav} from 'react-bootstrap'


export default class NavBar extends Component {
    render() {
        return (
            <div>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Long Huynh</Navbar.Brand>
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
