import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = ({ appName, pageName, userName }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>{pageName}</Navbar.Brand>
        <Navbar.Text className="mx-auto">{appName}</Navbar.Text>
        <Navbar.Text>Hello, {userName}</Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Header;