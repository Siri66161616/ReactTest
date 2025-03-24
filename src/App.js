import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Design from "./pages/Design";
import StandardDoc from "./pages/StandardDoc";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    
      <Routes>
       
        <Route path="/design" element={<Design />} />
        <Route path="/" element={<StandardDoc />} />
      </Routes>
    
  );
}

export default App;
