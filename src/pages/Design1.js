import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BasicEditPage = () => {
  return (
    <>
      <Container fluid className="vh-100 bg-light">
        <Row className="h-100 justify-content-between">
          <Col className="bg-light text-dark text-dark p-3 d-flex flex-column">
            <Row className="w-100 h-100 flex-column gap-2">
              <Col className="d-flex align-items-center justify-content-center flex-grow-1">
                <Row className="mb-3 align-items-center">
                  {/* Project Title Label with Red * */}
                  <Col md="auto">
                    <Form.Label>
                      <span style={{ color: "red" }}>*</span>{" "}
                      <strong>Project Title</strong>
                    </Form.Label>
                  </Col>

                  {/* Project ID Label */}
                  <Col md="auto" className="ms-3">
                    <Form.Label>
                      <strong>Project ID</strong>
                    </Form.Label>
                  </Col>

                  {/* Project ID Input Field (No Space Between Label and Input) */}
                  <Col md="auto">
                    <Form.Control
                      type="text"
                      value="1"
                      disabled
                      style={{ width: "50px", backgroundColor: "#ffcc00" }}
                    />
                  </Col>

                  {/* Full-width Project Title Input Field Below (Bigger Size, 3 Lines) */}
                  <Col md={12} className="mt-2">
                    <Form.Control
                      as="textarea"
                      placeholder="Project1"
                      disabled
                      rows={3}
                      style={{ backgroundColor: "#fff9c4" }} // Light yellow background
                    />
                  </Col>
                </Row>
              </Col>

              <Col className="d-flex align-items-center justify-content-center flex-grow-1">
                <Row className="mb-3 align-items-center">
                  {/* Project Title Label with Red * */}
                  <Col md="auto">
                    <Form.Label>
                      <span style={{ color: "red" }}>*</span>{" "}
                      <strong>Description</strong>
                    </Form.Label>
                  </Col>

                  {/* Full-width Project Title Input Field Below (Bigger Size, 3 Lines) */}
                  <Col md={12} className="mt-2">
                    <Form.Control
                      as="textarea"
                      placeholder="Change to def life mounting hardware to go with EIC changes to def line group"
                      rows={3}
                    />
                  </Col>
                </Row>
              </Col>

              <Col className="d-flex align-items-center justify-content-center flex-grow-1">
                <Col md={5}>
                  <Form.Label>
                    <strong>Part Numbers</strong>
                  </Form.Label>
                </Col>

                <Col md={7}>
                  <Form.Control
                    type="text"
                    placeholder="Enter part to search"
                  />
                </Col>
              </Col>

              <Row className="mb-4">
                <Form.Group as={Col} controlId="withoutCN">
                  <Form.Label>
                    <strong>Without CN#</strong>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Parts witn no CN"
                    style={{ backgroundColor: "#fff9c4" }}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="withCN">
                  <Form.Label>
                    <strong>With CN#</strong>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="parts with CN"
                    style={{ backgroundColor: "#fff9c4" }}
                  />
                </Form.Group>
              </Row>

              <Col className="d-flex align-items-center justify-content-center flex-grow-1">
                <Col className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Primary Proj. Type</strong>
                    </Form.Label>
                    <Form.Select>
                      <option>BIQ</option>
                      <option>CPI</option>
                      <option>NPI</option>
                      <option>GM</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Sec. Proj. Type</strong>
                    </Form.Label>
                    <Form.Select>
                      <option>NA</option>
                      <option>Deviation</option>
                      <option>NFFF</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Col>

              <Col className="d-flex align-items-center justify-content-center flex-grow-1">
                <Col className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Umbrella Project</strong>
                    </Form.Label>
                    <Form.Select>
                      <option>WTS</option>
                      <option>Maintenace</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Priority</strong>
                    </Form.Label>
                    <Form.Select>
                      <option>Noramal</option>
                      <option>Difficult</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Col>

              <Col className="d-flex align-items-center justify-content-center flex-grow-1">
                <Row className="mb-3 align-items-center">
                  {/* Project Title Label with Red * */}
                  <Col md="auto">
                    <Form.Label>
                      <strong>Umbrella Status</strong>
                    </Form.Label>
                  </Col>

                  {/* Full-width Project Title Input Field Below (Bigger Size, 3 Lines) */}
                  <Col md={12} className="mt-2">
                    <Form.Control
                      type="text"
                      placeholder="Active"
                      disabled
                      rows={3}
                      style={{ backgroundColor: "#fff9c4" }}
                    />
                  </Col>
                </Row>
              </Col>

              <Col className="d-flex align-items-center justify-content-center flex-grow-1">
                <Col className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Product Group</strong>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="WTS"
                      disabled
                      rows={3}
                      style={{ backgroundColor: "#fff9c4" }}
                    />
                  </Form.Group>
                </Col>
                <Col className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Machine Model</strong>
                    </Form.Label>
                    <Form.Select>
                      <option>620</option>
                      <option>830</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Col>

              <Col className="d-flex align-items-center justify-content-center flex-grow-1">
                <Row className="mb-3 align-items-center">
                  {/* Project Title Label with Red * */}
                  <Col md="auto">
                    <Form.Label>
                      <strong>Unique #</strong>
                    </Form.Label>
                  </Col>

                  {/* Full-width Project Title Input Field Below (Bigger Size, 3 Lines) */}
                  <Col md={12} className="mt-2">
                    <Form.Control
                      type="text"
                      placeholder=" "
                      disabled
                      rows={3}
                      style={{ backgroundColor: "#fff9c4" }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className="bg-light text-dark d-flex align-items-center justify-content-center p-3">
            <Row className="w-100 h-100 flex-column gap-2">
              <Col className="d-flex align-items-center justify-content-center flex-grow-1">
                <Row className="mb-3 align-items-center">
                  {/* Project Title Label with Red * */}
                  <Col md="auto">
                    <Form.Label>
                      <strong>CN Number</strong>
                    </Form.Label>
                  </Col>

                  <Col md="auto">
                    <Form.Control
                      type="text"
                      placeholder="Enter CN# to search"
                      style={{ backgroundColor: "fff9c4" }}
                    />
                  </Col>

                  {/* Full-width Project Title Input Field Below (Bigger Size, 3 Lines) */}
                  <Col md={12} className="mt-2">
                    <Form.Control
                      as="textarea"
                      placeholder="Enter the CN Number"
                      disabled
                      rows={3}
                      style={{ backgroundColor: "#fff9c4" }} // Light yellow background
                    />
                  </Col>
                </Row>
              </Col>
              <Col className="d-flex align-items-center justify-content-center flex-grow-1">
                <Row className="mb-3 align-items-center">
                  <Col md="auto">
                    <Form.Label>
                      <strong>CN Status</strong>
                    </Form.Label>
                  </Col>

                  <Col md={12} className="mt-2">
                    <Form.Control
                      type="text"
                      placeholder=""
                      disabled
                      style={{ backgroundColor: "#fff9c4" }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col className="d-flex align-items-center justify-content-center flex-grow-1">
                <Col className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>L3 System Impacted</strong>
                    </Form.Label>
                    <Form.Select>
                      <option>Guards & Covers</option>
                      <option>FFF</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Col>
              <Col className="d-flex align-items-center justify-content-center flex-grow-1">
                <Col className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Project Owner</strong>
                    </Form.Label>
                    <Form.Select>
                      <option>Alex Uken</option>
                      <option>FFF</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Col>
              <Col className="d-flex align-items-center justify-content-center flex-grow-1">
                <Col className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Func. Role</strong>
                    </Form.Label>
                    <Form.Select>
                      <option></option>
                      <option>FFF</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Proj Team mumbers</strong>
                    </Form.Label>
                    <Form.Select>
                      <option></option>
                      <option>GM</option>
                      <option>FEF</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Col>

              <Col className="d-flex align-items-center justify-content-center flex-grow-1">
                <Row className="mb-3 align-items-center">
                  {/* Project Title Label with Red * */}
                  <Col md="auto">
                    <Form.Label>
                      <strong>Estimated Hours</strong>
                    </Form.Label>
                  </Col>

                  {/* Full-width Project Title Input Field Below (Bigger Size, 3 Lines) */}
                  <Col md={12} className="mt-2">
                    <Form.Control type="text" placeholder="30" rows={3} />
                  </Col>
                </Row>
              </Col>
              <Row className="mb-3">
                {/* Left Column: Status & Mig. Proj. Status */}
                <Col md={12}>
                  {/* Status Dropdown */}
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <strong>Status</strong>
                    </Form.Label>
                    <Form.Select>
                      <option>New</option>
                      <option>Pending Launch</option>
                      <option>Design</option>
                      <option>Detail</option>
                      <option>EDS MCS</option>
                      <option>CC</option>
                      <option>CR</option>
                    </Form.Select>
                  </Form.Group>

                  

                  {/* Start Date - Now Aligned Below Status */}
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <span style={{ color: "red" }}>*</span>{" "}
                      <strong>Start Date</strong>
                    </Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </Col>

                {/* Right Column (Empty for Balance) */}
                <Col md={6}></Col>
              </Row>

              <Col className="d-flex align-items-center justify-content-center flex-grow-1">
                <Row className="mb-3 align-items-center">
                  <Col md="auto">
                    <Form.Label>
                      <strong>Charge Number</strong>
                    </Form.Label>
                  </Col>

                  <Col md={12} className="mt-2">
                    <Form.Control
                      type="text"
                      placeholder=""
                      style={{ backgroundColor: "#fff9c4" }}
                      rows={3}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className="bg-light text-dark d-flex align-items-center justify-content-center p-3">
            <Row className="w-100 h-100 flex-column gap-1">
              <Col className="d-flex align-items-center justify-content-center flex-grow-1">
                <Row className="mb-3 align-items-center">
                  <Col md="auto">
                    <Form.Label>
                      <strong>Project Target Date</strong>
                    </Form.Label>
                  </Col>

                  <Col md={12} className="mt-2">
                    <Form.Control type="date" placeholder="" rows={3} />
                  </Col>
                </Row>
              </Col>
              <Col className="d-flex align-items-center justify-content-center flex-grow-1">
                <Row className="mb-4">
                  <Form.Group as={Col} controlId="withoutCN">
                    <Form.Label>
                      <strong>PartNumberCount</strong>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="0"
                      style={{ backgroundColor: "#fff9c4" }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="withCN">
                    <Form.Label>
                      <strong>P10 Count</strong>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="0"
                      style={{ backgroundColor: "#fff9c4" }}
                    />
                  </Form.Group>
                </Row>
              </Col>
              <Col className="d-flex align-items-center justify-content-center flex-grow-1">
                <Row className="mb-3 align-items-center"></Row>
              </Col>
              <Col className="d-flex align-items-center justify-content-center flex-grow-1">
                <Row className="mb-3 align-items-center"></Row>
              </Col>
              <Col className="d-flex align-items-center justify-content-center flex-grow-1">
                <Row className="mb-3 align-items-center"></Row>
              </Col>
              <Col className="d-flex align-items-center justify-content-center flex-grow-1">
                <Row className="mb-3 align-items-center"></Row>
              </Col>
              <Col className="d-flex align-items-center justify-content-center flex-grow-1">
                <Row className="mb-3 align-items-center"></Row>
              </Col>
              <Col className="d-flex align-items-center justify-content-center flex-grow-1">
                <Row className="mb-3 align-items-center"></Row>
              </Col>
              <Col className="d-flex align-items-center justify-content-center flex-grow-1">
                <Row className="mb-3 align-items-center"></Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BasicEditPage;
