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
        productGroup: "OHT",
        umbrellaProjects: [
          { name: "773 Kinetic", status: "Active" },
          { name: "775 Kinetic", status: "Inactive" },
          { name: "777 Kinetic", status: "Active" },
          { name: "OHT CPI", status: "Inactive" },
          { name: "775 BEV", status: "Active" },
        ],
        machineModel: ["773", "777", "775", "776"],
      },
      {
        productGroup: "WTS",
        umbrellaProjects: [
          { name: "WTS CPI", status: "Active" },
          { name: "WTS Maintenance", status: "Inactive" },
          { name: "Hood Support", status: "Active" },
          { name: "WTS Bowl Sourcing", status: "Inactive" },
          { name: "WTS AOS", status: "Active" },
        ],
        machineModel: ["620", "630", "650", "670"],
      }
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
