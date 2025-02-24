import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Table,
} from "react-bootstrap";
import { Search } from "lucide-react";

function Home1() {
  // Generate 60 rows of dummy data
  const generateDummyData = () => {
    let data = [];
    for (let i = 1; i <= 60; i++) {
      data.push({
        id: i,
        title: `Project ${i}`,
        number: `100${i}`,
        status: i % 2 === 0 ? "Active" : "Pending",
        action: "Edit",
      });
    }
    return data;
  };

  const tableData = generateDummyData();

  return (
    <Container
      fluid
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#808080",
        padding: "10px",
      }}
    >
      {/* Top Row with Search Bars */}
      <Row>
        {/* First Search Bar (Top-Left) */}
        <Col md={6} className="mb-3">
          <InputGroup
            style={{ backgroundColor: "#FFCC00", borderRadius: "5px" }}
          >
            <FormControl
              style={{ backgroundColor: "#FFCC00", border: "none" }}
              type="text"
              placeholder="Search CPI/NPI/BIQ/Deviation"
            />
            <InputGroup.Text
              style={{ backgroundColor: "#FFCC00", border: "none" }}
            >
              <Search size={18} />
            </InputGroup.Text>
          </InputGroup>
        </Col>

        {/* Second Search Bar (Top-Right) */}
        <Col md={6} className="mb-3">
          <InputGroup
            style={{ backgroundColor: "#FFCC00", borderRadius: "5px" }}
          >
            <FormControl
              style={{ backgroundColor: "#FFCC00", border: "none" }}
              type="text"
              placeholder="Search Part Number"
            />
            <InputGroup.Text
              style={{ backgroundColor: "#FFCC00", border: "none" }}
            >
              <Search size={18} />
            </InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>

      {/* Bottom Section with Two Equal Containers */}
      <Row className="h-100">
        {/* Left Container (Divided into Two Sections) */}
        <Col
          md={6}
          style={{
            backgroundColor: "#D3D3D3",
            padding: "20px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Upper Section */}
          <div style={{ flex: 1 }}>
            {/* Header */}
            <div
              style={{
                backgroundColor: "#FFCC00",
                padding: "10px",
                textAlign: "center",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Projects with missing mandatory information (80)
            </div>

            {/* Scrollable Table */}
            <div
              style={{
                maxHeight: "300px",
                overflowY: "auto",
                marginTop: "10px",
              }}
            >
              <Table striped bordered hover>
                <thead
                  style={{
                    backgroundColor: "#FFD700",
                    position: "sticky",
                    top: 0,
                  }}
                >
                  <tr>
                    <th>ID</th>
                    <th>Project Title</th>
                    <th>Project Number(s)</th>
                    <th>Proj. Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row) => (
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      <td>{row.title}</td>
                      <td>{row.number}</td>
                      <td>{row.status}</td>
                      <td>{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>

          {/* Divider */}
          <hr style={{ borderTop: "2px solid black", margin: "10px 0" }} />

          {/* Lower Section */}
          <div style={{ flex: 1 }}>
            {/* Header */}
            <div
              style={{
                backgroundColor: "#FFCC00",
                padding: "10px",
                textAlign: "center",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Projects Status Mismatch with CN# Status Total Projects 253
              Mismatch count 30
            </div>

            {/* Scrollable Table */}
            <div
              style={{
                maxHeight: "300px",
                overflowY: "auto",
                marginTop: "10px",
              }}
            >
              <Table striped bordered hover>
                <thead
                  style={{
                    backgroundColor: "#FFD700",
                    position: "sticky",
                    top: 0,
                  }}
                >
                  <tr>
                    <th>ID</th>
                    <th>Project Title</th>
                    <th>Project Number(s)</th>
                    <th>Proj. Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row) => (
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      <td>{row.title}</td>
                      <td>{row.number}</td>
                      <td>{row.status}</td>
                      <td>{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Col>

        {/* Right Container (Divided into Two Equal Horizontal Sections) */}
        <Col
          md={6}
          className="d-flex flex-column"
          style={{
            backgroundColor: "#000000",
            padding: "20px",
            color: "white",
          }}
        >
          {/* Upper Part of Right Container */}
          <div
            style={{
              flex: 1,
              borderBottom: "2px solid white",
              paddingBottom: "10px",
            }}
          >
            <div
              style={{
                backgroundColor: "#FFCC00",
                padding: "10px",
                textAlign: "center",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Design Project Summary
            </div>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "100%" }}
            >
              <h4>Content for Right Section 1</h4>
            </div>
          </div>

          {/* Lower Part of Right Container */}
          <div style={{ flex: 1, paddingTop: "10px" }}>
            <div
              style={{
                backgroundColor: "#FFCC00",
                padding: "10px",
                textAlign: "center",
                fontWeight: "bold",
                color: "black",
              }}
            >
              VPD Project Summary (Under Construction)
            </div>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "100%" }}
            >
              <h4>Content for Right Section 2</h4>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home1;
