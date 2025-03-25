import React, { createContext, useContext, useMemo, useState } from "react";

// Create Context
const ProjectContext = createContext();

// Context Provider Component
export const ProjectProvider = ({ children }) => {
  // ✅ Store project data in state to allow updates
  const [projectData, setProjectData] = useState([
    {
      projectType: "BIQ",
      secondaryProjectType: ["NA"],
      ListOfStatus: [
        "New",
        "PendingLaunch",
        "Define",
        "Measure",
        "Analyze",
        "Improve",
        "Control",
        "MCS Release",
        "Closed-Canceled",
        "Closed-Resolved",
      ],
      Status: ["New"],
    },
    {
      projectType: "CPI",
      secondaryProjectType: ["NA"],
      ListOfStatus: [
        "New",
        "PendingLaunch",
        "Define",
        "Measure",
        "Analyze",
        "Improve",
        "Control",
        "MCS Release",
        "Closed-Canceled",
        "Closed-Resolved",
      ],
      Status: ["New"],
    },
    {
      projectType: "GM",
      secondaryProjectType: ["Deviation", "FFF", "NFFF"],
      ListOfStatus: [
        "New",
        "PendingLaunch",
        "Requirements",
        "Design",
        "Detail",
        "MCS Release",
        "Closed-Canceled",
        "Closed-Resolved",
      ],
      Status: ["New"],
    },
    {
      stdReqCheck: "Enter standard requirement",
      stdDesignCheck: "Enter standard design",
      stdDetailCheck: "Enter standard detail",
    },
  ]);

  // ✅ Store product groups in state (optional, only if they change)
  const [productGroups, setProductGroups] = useState([
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
    },
  ]);

  // ✅ Memoize the context value
  const value = useMemo(
    () => ({
      projectData,
      setProjectData, // ✅ Add setProjectData so it can be used
      productGroups,
      setProductGroups, // ✅ Optional if needed
    }),
    [projectData, productGroups]
  );

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};

// Custom Hook to Use Context
export const useProjectData = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjectData must be used within a ProjectProvider");
  }
  return context;
};
