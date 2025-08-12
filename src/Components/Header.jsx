import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <div>
      <Navbar
        expand="lg"
        className="navbar py-3 pt-4 bg-[#03045E]"
        data-bs-theme="dark"
      >
        <Container>
          {/* Brand Name */}
          <Navbar.Brand href="/" className="text-white fw-bold">
            <img src="/image/logo.png" alt="" className='img-fluid w-25' />
          </Navbar.Brand>

          {/* Toggle Button for Small Screens */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Collapsible Nav Items */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-item d-flex gap-5">
              <Nav.Link href="#about" className="text-white">About</Nav.Link>
              <Nav.Link href="#services" className="text-white">Services</Nav.Link>
              <Nav.Link href="#projects" className="text-white">Projects</Nav.Link>
              <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
