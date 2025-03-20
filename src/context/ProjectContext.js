import React, { createContext, useContext, useMemo } from "react";

// Create Context
const ProjectContext = createContext(null);

// Context Provider Component
export const ProjectProvider = ({ children }) => {
  const value = useMemo(() => ({
    projectData: [
      {
        projectType: "BIQ",
        secondaryProjectType: ["NA"],
        Status: ["New", "PendingLaunch", "Define", "Measure", "Analyze", "Improve", "Control", "MCS Release", "Closed-Canceled", "Closed-Resolved"],
      },
      {
        projectType: "CPI",
        secondaryProjectType: ["NA"],
        Status: ["New", "PendingLaunch", "Define", "Measure", "Analyze", "Improve", "Control", "MCS Release", "Closed-Canceled", "Closed-Resolved"],
      },
      {
        projectType: "GM",
        secondaryProjectType: ["Deviation", "FFF", "NFFF"],
        Status: ["New", "PendingLaunch", "Requirements", "Design", "Detail", "MCS Release", "Closed-Canceled", "Closed-Resolved"],
      }
    ],
    productGroups: [
      {
        name: "Group A",
        umbrellaStatus: ["Active", "Inactive"],
        machineModel: ["Model X", "Model Y"],
      },
      {
        name: "Group B",
        umbrellaStatus: ["Pending", "Approved"],
        machineModel: ["Model Z"],
      },
      {
        name: "Group C",
        umbrellaStatus: ["New", "Old"],
        machineModel: ["Model A", "Model B"],
      },
    ],
  }), []);

  return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
};

// Custom Hook to Use Context
export const useProjectData = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjectData must be used within a ProjectProvider");
  }
  console.log("Context Data:", context); // Debugging: Log context
  return context;
};
