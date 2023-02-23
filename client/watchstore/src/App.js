import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Login/Register";
import Login from "./components/Login/Login";
import React, { createContext, useState } from "react";
import Home from "./components/Login/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarHome from "./components/Navbar/NavbarHome";
export const store = createContext();

function App() {
  const [token, settoken] = useState("");

  return (
    <div className="App">
      {/* <Router>
        <store.Provider value={[token, settoken]}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/sigin" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </store.Provider>
      </Router> */}
      <NavbarHome />
    </div>
  );
}

export default App;
