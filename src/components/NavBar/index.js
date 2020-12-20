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
    top:2175,
    behavior: 'smooth'
  })
}

const scrollContact = () => {
  window.scrollTo({
    top:3250,
    behavior: 'smooth'
  })
  }
  
  const scrollMain = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

        return (
            <div>
  <Navbar fixed ="top" className="NavBar">
    <Navbar.Brand className="NavText" sticky = "top" onClick ={scrollMain}> <a id="title"> Long Huynh </a></Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link onClick = {scrollHome} id="nav-section">Home</Nav.Link>
      <Nav.Link onClick = {scrollProjects}id="nav-section">Projects</Nav.Link>
      <Nav.Link onClick = {scrollContact}id="nav-section">Contact Me</Nav.Link>
    </Nav>

  </Navbar>
            </div>
        )
    }

export default NavBar