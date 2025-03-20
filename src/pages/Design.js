import React, { useState } from "react";
import { Card, Form, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useProjectData } from "../context/ProjectContext";
import { ArrowRight } from "react-bootstrap-icons";

const Design1 = () => {
  const { projectData, productGroups } = useProjectData();

  // Function to determine the Start Date label
  const getStartDateLabel = (status) => {
    return `${status} Start Date`;
  };

  // State Management
  const [selectedPrimary, setSelectedPrimary] = useState("");
  const [secondaryOptions, setSecondaryOptions] = useState([]);
  const [selectedSecondary, setSelectedSecondary] = useState("");
  const [statusOptions, setStatusOptions] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");

  const [selectedProductGroup, setSelectedProductGroup] = useState("");
  const [umbrellaOptions, setUmbrellaOptions] = useState([]);
  const [selectedUmbrella, setSelectedUmbrella] = useState("");
  const [machineOptions, setMachineOptions] = useState([]);
  const [selectedMachine, setSelectedMachine] = useState("");

  console.log("Project Data:", projectData); // Debugging output

  const handlePrimaryChange = (e) => {
    const selectedProjectType = e.target.value;
    setSelectedPrimary(selectedProjectType);

    const selectedProject = projectData.find(
      // ✅ Added 'const'
      (p) => p.projectType === selectedProjectType
    );

    if (selectedProject) {
      const options = selectedProject.secondaryProjectType;
      setSecondaryOptions(options);

      // ✅ If only one secondary option, auto-select it
      if (selectedProject) {
        const secOptions = selectedProject.secondaryProjectType;
        setSecondaryOptions(secOptions);
        setSelectedSecondary(secOptions.length === 1 ? secOptions[0] : "");

        const statOptions = selectedProject.Status;
        setStatusOptions(statOptions);
        setSelectedStatus(""); // Reset status on project type change
      } else {
        setSecondaryOptions([]);
        setSelectedSecondary("");
        setStatusOptions([]);
        setSelectedStatus("");
      }
    }
  };
  // Handle Product Group Change
  const handleProductGroupChange = (e) => {
    const selectedGroup = e.target.value;
    setSelectedProductGroup(selectedGroup);

    const selectedData = productGroups.find(
      (group) => group.name === selectedGroup
    );

    if (selectedData) {
      setUmbrellaOptions(selectedData.umbrellaStatus);
      setSelectedUmbrella(
        selectedData.umbrellaStatus.length === 1
          ? selectedData.umbrellaStatus[0]
          : ""
      );

      setMachineOptions(selectedData.machineModel);
      setSelectedMachine(
        selectedData.machineModel.length === 1
          ? selectedData.machineModel[0]
          : ""
      );
    } else {
      setUmbrellaOptions([]);
      setSelectedUmbrella("");
      setMachineOptions([]);
      setSelectedMachine("");
    }
  };

  const steps = [
    "New",
    "Pending Launch",
    "Requirements",
    "Design",
    "Detail",
    "EDS/MCS Release",
    "Closed-Resolved",
  ];

  return (
    <>
      <Container fluid className="vh-100 bg-light">
        <div
          className="border-top border-bottom"
          style={{
            borderTop: "2px solid black",
            borderBottom: "2px solid black",
            padding: "10px 0",
          }}
        ></div>

        <Row className=" align-items-center mt-1 mb-1">
          {/* Project Status Card (Vertical) */}
          <Col xs="auto" className="d-flex align-items-center">
            <Card
              className="p-2 shadow-sm d-flex align-items-center justify-content-center"
              style={{
                minWidth: "50px",
                height: "120px",
                writingMode: "vertical-rl", // Vertical text direction
                textAlign: "center",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                transform: "rotate(180deg)",
              }}
            >
              <span>Project Status</span>
            </Card>
          </Col>
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <Col xs="auto" className="d-flex justify-content-center">
                <Card
                  className="p-2 shadow-sm d-flex flex-column align-items-center"
                  style={{ minWidth: "120px", width: "auto", height: "50px" }}
                >
                  {/* Lower Section (Now Upper Section) */}
                  <div
                    className="w-100 d-flex align-items-center justify-content-center"
                    style={{ height: "50%", borderBottom: "1px solid #ddd" }}
                  >
                    <span style={{ fontSize: "0.85rem" }}>{step}</span>
                  </div>

                  {/* Upper Section (Now Lower Section) */}
                  <div
                    className="w-100 d-flex align-items-center justify-content-center"
                    style={{ height: "50%" }}
                  >
                    <span style={{ fontSize: "0.75rem", fontWeight: "bold" }}>
                      {" "}
                    </span>
                  </div>
                </Card>
              </Col>

              {index !== steps.length - 1 && (
                <Col xs="auto" className="d-flex justify-content-center">
                  <ArrowRight size={20} className="text-warning" />
                </Col>
              )}
            </React.Fragment>
          ))}
        </Row>
        <div
          className="border-top "
          style={{
            padding: "10px 0",
          }}
        ></div>

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

              <Col className="d-flex align-items-center  flex-grow-1">
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
                    <Form.Select
                      value={selectedPrimary}
                      onChange={handlePrimaryChange}
                    >
                      <option value="">Select Project Type</option>
                      {projectData.map((project) => (
                        <option
                          key={project.projectType}
                          value={project.projectType}
                        >
                          {project.projectType}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Sec. Proj. Type</strong>
                    </Form.Label>
                    <Form.Select
                      value={selectedSecondary}
                      onChange={(e) => setSelectedSecondary(e.target.value)}
                      disabled={secondaryOptions.length === 0}
                    >
                      <option value="" disabled={secondaryOptions.length === 1}>
                        {secondaryOptions.length > 1
                          ? "Select Secondary Type"
                          : ""}
                      </option>
                      {secondaryOptions.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Col>

              <Col className="d-flex align-items-center flex-grow-1">
                <Col className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>
                      <strong>Umbrella Project</strong>
                    </Form.Label>
                    <Form.Select
                      value={selectedProductGroup}
                      onChange={handleProductGroupChange}
                    >
                      <option value="">Select Product Group</option>
                      {productGroups.map((group) => (
                        <option key={group.name} value={group.name}>
                          {group.name}
                        </option>
                      ))}
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

              <Col className="d-flex align-items-center flex-grow-1">
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
                    <Form.Select
                      value={selectedMachine}
                      onChange={(e) => setSelectedMachine(e.target.value)}
                    >
                      <option value="">Select Machine Model</option>
                      {machineOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Col>

              <Col className="d-flex align-items-center  flex-grow-1">
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
              <Col className="d-flex align-items-center  flex-grow-1">
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

              <Col className="d-flex align-items-center  flex-grow-1">
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
                    <Form.Select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      disabled={statusOptions.length === 0}
                    >
                      <option value="">Select Status</option>
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  {/* Dynamic Start Date Field */}
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <span style={{ color: "red" }}>*</span>{" "}
                      <strong>{getStartDateLabel(selectedStatus)}</strong>
                    </Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </Col>

                {/* Right Column (Empty for Balance) */}
                <Col md={6}></Col>
              </Row>

              <Col className="d-flex align-items-center flex-grow-1">
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
              <Col className="d-flex align-items-center  flex-grow-1">
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
              <Col className="d-flex align-items-center  flex-grow-1">
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

export default Design1;
