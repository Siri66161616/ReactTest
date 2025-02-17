import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = ({ appName, pageName, userName }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Text>{pageName}</Navbar.Text>
        <Navbar.Brand className="mx-auto">{appName}</Navbar.Brand>
        
        <Navbar.Text>Hello, {userName}</Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Header;