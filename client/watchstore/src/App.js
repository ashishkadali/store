import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginHome from "./components/Login/LoginHome";
import Register from "./components/Login/Register";
import Login from "./components/Login/Login";
import React, { createContext, useState } from "react";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";

export const store = createContext();

function App() {
  const [token, settoken] = useState("");

  return (
    <div className="App">
      <Router>
        <store.Provider value={[token, settoken]}>
          <Routes>
            <Route path="/" element={<LoginHome />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Home" element={<Home />}></Route>
          </Routes>
        </store.Provider>
      </Router>
    </div>
  );
}

export default App;
