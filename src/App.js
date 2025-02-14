import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";

function App() {
  const [user, setUser] = useState("Shirisha");
  
  return (
    <div>
      <Header appName="Project Manager" pageName="Home" userName={user} />
      <h1>Welcome to the Dashboard</h1>
    </div>
  );
}

export default App;