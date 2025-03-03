import React, { useState } from "react";
import { Form, Container } from "react-bootstrap";

const DropdownComponent = () => {
  // Dropdown data
  const projects = ["Project1", "Project2", "Project3", "Project4"];
  const detailsMap = {
    Project1: ["details1", "concept1", "name1"],
    Project2: ["details2", "concept2", "name2"],
    Project3: ["details3", "concept3", "name3"],
    Project4: ["details4", "concept4", "name4"],
  };

  const [selectedProject, setSelectedProject] = useState("");
  const [details, setDetails] = useState([]);

  // Handle first dropdown change
  const handleProjectChange = (event) => {
    const selected = event.target.value;
    setSelectedProject(selected);
    setDetails(detailsMap[selected] || []);
  };

  return (
    <Container className="mt-4">
      <h3>Select Project</h3>
      <Form.Group>
        <Form.Select value={selectedProject} onChange={handleProjectChange}>
          <option value="">Select</option>
          {projects.map((project, index) => (
            <option key={index} value={project}>
              {project}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mt-3">
        <h3>Details</h3>
        <Form.Select disabled={!selectedProject}>
          <option value="">Select</option>
          {details.map((detail, index) => (
            <option key={index} value={detail}>
              {detail}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </Container>
  );
};

export default DropdownComponent;
