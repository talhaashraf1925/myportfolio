import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#03045E] to-[#4B0082] py-5 mt-5  text-white">
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <h4 className="fw-bold">💼 My Portfolio</h4>
            <p className="medium">
              Showcasing my projects, skills, and passion for creating modern, responsive, and
              user-friendly web solutions.
            </p>
          </Col>
          {/* Quick Links */}
          <Col md={4}>
            <h4 className="fw-bold">🔗 Quick Links</h4>
            <ul className="list-unstyled medium" style={{lineHeight:"34px"}}>
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#projects" className="text-white text-decoration-none">Projects</a></li>
              <li><a href="#services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          {/* Contact Info */}
          <Col md={4}>
            <h4 className="fw-bold">📞 Contact</h4>
            <p className="medium mb-1">📧 Email: <a href="mailto:muhmmadtalha2006@gmail.com" className="text-white text-decoration-none">muhmmadtalha2006@gmail.com</a></p>
            <p className="medium ms-1 mb-1">📱 Phone: +92 3066390289</p>
            <div className="d-flex gap-3 mt-2">
              <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="text-white fs-4"><i className="bi bi-github"></i></a>
              <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="text-white fs-4"><i className="bi bi-linkedin"></i></a>
              <a href="https://twitter.com/yourtwitter" target="_blank" rel="noreferrer" className="text-white fs-4"><i className="bi bi-twitter"></i></a>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <div className="text-center mt-4 border-top pt-3 small">
          © {new Date().getFullYear()} Talha Ashraf. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
