import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//import Design from "../pages/Design1";


const Header = ({ appName, pageName, userName }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleAddNewProject = () => {
    navigate("/Design1"); // Navigate to Design.js page
  };

  return (
    <div className="d-flex">
      {/* Sidebar (Occupies Fixed Left Space) */}

      {/* Header (Starts After Sidebar) */}
      <Navbar
        style={{
          backgroundColor: "#FFCC00",
          height: "40px",
          marginLeft: "150px", // Ensures Header starts after Sidebar
          width: "calc(100% - 150px)", // Takes the full remaining width
        }}
        variant="dark"
      >
        <Container className="d-flex justify-content-between">
          <Navbar.Text style={{ color: "white" }}>{pageName}</Navbar.Text>
          <Navbar.Brand style={{ color: "black", fontWeight: "bold" }}>
            {appName}
          </Navbar.Brand>
          <div className="d-flex align-items-center gap-3">
            {/* Add New Project Button */}
            <Button variant="primary" size="sm" onClick={handleAddNewProject}>
              Add New Project
            </Button>

            {/* User Greeting */}
            <Navbar.Text style={{ color: "white" }}>
              Hello, {userName}
            </Navbar.Text>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
