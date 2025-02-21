import React from "react";
import { Container, Form, InputGroup, FormControl } from "react-bootstrap";
import { Search } from "lucide-react";

function Home1() {
  return (
    <Container fluid className="position-relative" style={{ width: "100vw", height: "100vh",backgroundColor:"#808080" }}>
      {/* First Search Bar (Top-Left) */}
      <InputGroup style={{ position: "absolute", top: "10px", left: "10px", width: "30%",backgroundColor: "#FFCC00",borderRadius: "5px" }}>
        <FormControl style={{ backgroundColor: "#FFCC00", border: "none" }} type="text" placeholder="Search CPI/NPI/BIQ/Deviation" / >
        <InputGroup.Text style={{ backgroundColor: "#FFCC00", border: "none" }}>
          <Search size={18} />
        </InputGroup.Text>
      </InputGroup>

      {/* Second Search Bar (Top-Right) */}
      <InputGroup style={{ position: "absolute", top: "10px", right: "10px", width: "30%" }}>
        <FormControl style={{ backgroundColor: "#FFCC00", border: "none" }} type="text" placeholder="Search Part Number" />
        <InputGroup.Text style={{ backgroundColor: "#FFCC00", border: "none" }}>
          <Search size={18} />
        </InputGroup.Text>
      </InputGroup>
    </Container>
  );
};

export default Home1;