import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
require("./script.css");

const NavBar = () => { 


  const scrollHome = () => {
    window.scrollTo({
      top:1200,
      behavior: 'smooth'
    })
}

const scrollProjects = () => {
  window.scrollTo({
    top:2125,
    behavior: 'smooth'
  })
}

const scrollContact = () => {
  window.scrollTo({
    top:3250,
    behavior: 'smooth'
  })
}

        return (
            <div>
  <Navbar fixed ="top" className="NavBar" bg="dark" variant="dark">
    <Navbar.Brand className="NavText" href="#home" sticky = "top">Long Huynh</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link onClick = {scrollHome}>Home</Nav.Link>
      <Nav.Link onClick = {scrollProjects}>Projects</Nav.Link>
      <Nav.Link onClick = {scrollContact}>Contact Me</Nav.Link>
    </Nav>

  </Navbar>
            </div>
        )
    }

export default NavBar