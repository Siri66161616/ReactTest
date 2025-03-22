import React, { useState } from "react";
import {
  Container,
  Button,
  Collapse,
  Card,
  Form,
  Table,
} from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";

const StandardDoc = () => {
  // State to manage collapsible sections
  const [open, setOpen] = useState({
    check1: false,
    check2: false,
    check3: false,
  });

  // Function to toggle collapse state for check1 only
  const toggleCollapse = (key) => {
    if (key === "check1") {
      setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
    }
  };

  // Sample data for the table
  const data = [
    {
      category: "COMMONALITY",
      question:
        "Is there opportunity to update to Corporate Step/Rung and/or Common Corporate Stamped Guardian Post? (See LS-QR005)",
    },
    {
      category: "COMMONALITY",
      question:
        "Is there opportunity to update to ROP material/thickness guide and/or bend guide?",
    },
    {
      category: "CONDUCT DESIGN REVIEWS - Ongoing",
      question:
        "Has the project been reviewed with tech experts/MO/product support to clearly understand the alignment to the requirements?",
    },
    {
      category: "CONDUCT DESIGN REVIEWS - Ongoing",
      question: "Has DR1 been completed?",
    },
    {
      category: "CPQD",
      question:
        "Have you ran the WTS CPQD Flow process if this is a WTS project? Did you verify folders/files/One Note files are created? Do not use special characters.",
    },
  ];

  return (
    <Container
      fluid
      className="mt-3 p-3 vh-100"
      style={{ backgroundColor: "black", width: "100vw" }}
    >
      {/* Header Section */}
      <div
        className="d-flex justify-content-between align-items-center p-2 rounded"
        style={{ backgroundColor: "gold", color: "black" }}
      >
        <div className="ms-auto">
          <Button variant="light" size="sm">
            Standard Work Document
          </Button>
        </div>
      </div>

      {/* Table and Buttons Section */}
      <div className="d-flex justify-content-between mt-3">
        <Table bordered responsive>
          <thead>
            <tr>
              <th>Teams</th>
              <th>Product Group</th>
              <th>Std. Work GATE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>LIGHT FABS</td>
              <td>WTS</td>
              <td>MEASURE</td>
            </tr>
          </tbody>
        </Table>

        {/* Buttons for Status Information */}
        <div className="d-flex flex-column gap-1 mb-3">
          <div className="d-flex gap-4 w-150">
            <Button
              variant="secondary"
              className="flex-fill"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #6c757d",
                color: "yellow",
              }}
            >
              Total No. of Questions: 18
            </Button>
            <Button variant="secondary" className="flex-fill">
              Std. Work Check Status
            </Button>
          </div>
          <div className="d-flex gap-5 w-150">
            <Button
              variant="secondary"
              className="flex-fill"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #6c757d",
                color: "yellow",
              }}
            >
              Questions Answered: 0
            </Button>
            <Button
              variant="secondary"
              className="flex-fill"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #6c757d",
                color: "yellow",
              }}
            >
              Not yet checked
            </Button>
          </div>
        </div>
      </div>

      {/* Collapsible Sections */}
      {["check1", "check2", "check3"].map((item, index) => (
        <Card className="mt-3" key={index}>
          <Button
            style={{
              backgroundColor: item === "check1" ? "gold" : "gray",
              color: "black",
              border: "none",
            }}
            className="w-100 text-start p-3 d-flex align-items-center"
            onClick={() => toggleCollapse(item)}
            disabled={item !== "check1"} // Only check1 is clickable
          >
            <span className="flex-grow-1">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </span>
            <FaChevronDown
              style={{
                transition: "transform 0.3s",
                transform: open[item] ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </Button>
          <Collapse in={open[item]}>
            <Card.Body className="bg-light p-4">
              {item === "check1" && (
                <Form>
                  <Table bordered responsive>
                    <thead>
                      <tr>
                        <th>Sub-Category</th>
                        <th>Check to be performed</th>
                        <th>Standard Work Check Status</th>
                        <th>Documented Outcome</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr key={index}>
                          <td>{item.category}</td>
                          <td>{item.question}</td>
                          <td>
                            <Form>
                              <Form.Check
                                type="radio"
                                label="Met"
                                name={`status-${index}`}
                              />
                              <Form.Check
                                type="radio"
                                label="NotMet"
                                name={`status-${index}`}
                              />
                              <Form.Check
                                type="radio"
                                label="NA"
                                name={`status-${index}`}
                              />
                            </Form>
                          </td>
                          <td>
                            <Form.Control
                              type="text"
                              placeholder="Enter your inputs here..."
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Form>
              )}
            </Card.Body>
          </Collapse>
        </Card>
      ))}
    </Container>
  );
};

export default StandardDoc;
