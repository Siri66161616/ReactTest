import React, { useState } from "react";
import { Container, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home1";
import Admin1 from "../pages/Admin1";
import Feedback from "../pages/Feed";
import Design from "../pages/Design1";


const Sidebar = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const handleNavigation = (path, index) => {
    setSelected(index);
    navigate(path);
  };

  return (
    <Container fluid className="d-flex p-0" style={{ height: "100vh",width: "170px" }}>
      
      <Nav   className="d-flex flex-column justify-content-center align-items-center bg-dark p-3"
      style={{ width: "150px", height: "100vh", position: "fixed", left: 0, top: 0 }}>
        {[
          { name: "Home", path: "/Home1" },
          { name: "Design", path: "/Design1" },
          { name: "VPD", path: "", disabled: true },
          { name: "Admin", path: "/Admin1" },
          { name: "Feed", path: "/Feed" },
        ].map((item, index) => (
          <Button
            key={index}
            onClick={() => !item.disabled && handleNavigation(item.path, index)}
            style={{
              backgroundColor: selected === index || item.disabled ? "#808080" : "#FFCC00",
              borderColor: selected === index || item.disabled ? "#808080" : "#FFCC00",
              width: "120px", // Same width for all buttons
            height: "40px", // Same height for all buttons
            }}
            variant="light"
            className="mb-2"
            disabled={item.disabled}
          >
            {item.name}
          </Button>
        ))}
      </Nav>
    </Container>
  );
};

export default Sidebar;
