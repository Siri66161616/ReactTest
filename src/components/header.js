import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = ({ appName, pageName, userName }) => {
  return (
    <div className="d-flex">
      {/* Sidebar (Occupies Fixed Left Space) */}
      
  
      {/* Header (Starts After Sidebar) */}
      <Navbar style={{
        backgroundColor: "#FFCC00",
        height: "40px",
        marginLeft: "150px", // Ensures Header starts after Sidebar
        width: "calc(100% - 150px)", // Takes the full remaining width
      }}
      variant="dark">
        <Container className="d-flex justify-content-between">
          <Navbar.Text style={{ color: "white" }}>{pageName}</Navbar.Text>
          <Navbar.Brand style={{ color: "black", fontWeight: "bold" }}>{appName}</Navbar.Brand>
          <Navbar.Text style={{ color: "white" }}>Hello, {userName}</Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
  
};

export default Header;