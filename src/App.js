import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch data from the Python backend
        axios.get("http://localhost:5000/api/projects")
            .then((response) => {
                setProjects(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Project Info</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.ID}>
                        <strong>{project.Project_Title}</strong> - 
                        Part Numbers: {project.PartNumbers} | 
                        Status: {project.Proj_Status} | 
                        Action: {project.Action}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
