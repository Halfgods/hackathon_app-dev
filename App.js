import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../src/Components/Authentication/Auth.js";
import Info from "../src/Components/Info/information.js";
import "../src/App.css";
const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/info" element={<Info />} />
        </Routes>
    </Router>
  );
};

export default App;
