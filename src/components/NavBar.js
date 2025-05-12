import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg'; // LinkedIn
import navIcon2 from '../assets/img/mail.png'; // Gmail
import navIcon3 from '../assets/img/phone.png'; // Phone
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(`${text} copied to clipboard!`);
      setTimeout(() => setCopySuccess(''), 2000); // Hide notification after 2 seconds
    }).catch(err => {
      setCopySuccess('Failed to copy');
      setTimeout(() => setCopySuccess(''), 2000); // Hide notification after 2 seconds
    });
  };

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <span style={{ fontSize: "35px", fontWeight: "bold", color: "white" }}>
              Punnapat Getgaew
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#educations" className={activeLink === 'educations' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('educations')}>Educations</Nav.Link>
              <Nav.Link href="#experiences" className={activeLink === 'experiences' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experiences')}>Experiences</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a onClick={() => copyToClipboard('punnapat.getg@gmail.com')} href="#" aria-label="Copy Gmail">
                  <img src={navIcon2} alt="Gmail" />
                </a>
                <a onClick={() => copyToClipboard('0994592444')} href="#" aria-label="Copy Phone Number">
                  <img src={navIcon3} alt="Phone" />
                </a>
                <a href="https://www.linkedin.com/in/punnapatgetg" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
              </div>
              {copySuccess && <div className="copy-notification">{copySuccess}</div>}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
