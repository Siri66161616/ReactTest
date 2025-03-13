import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1 from "./pages/Home1";
import Admin from "./pages/Admin1";
import Feed from "./pages/Feed";
import Design from "./pages/Design1";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState("Shirisha");

  return (
    <div>
      <div>
        <Header pageName="Project XYZ" appName="Home" userName="Shirisha" />
      </div>
      <div className="d-flex">
        <Sidebar />
        <Routes>
          <Route path="/Home1" element={<Home1 />} />
          <Route path="/Admin1" element={<Admin />} />
          <Route path="/Feed" element={<Feed/>} />
          <Route path="/Design1" element={<Design/>} />
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
