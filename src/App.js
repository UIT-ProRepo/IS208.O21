import Login from "./components/login/login";
import React from "react";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/Home" element ={} /> */}
      </Routes>
    </div>
  );
}

export default App;
