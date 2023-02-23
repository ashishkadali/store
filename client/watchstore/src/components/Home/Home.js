import React, { useContext, useState, useEffect } from "react";
import profile from "../assestment/profile.png";
import { store } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Overlay from "./Overlay";
// import "./Home.scss";

function Home() {
  const [token, setToken] = useContext(store);
  const [data, setData] = useState(null);
  const [overlaystatus, setOverlaystatus] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5001/home", {
  //       headers: {
  //         "x-token": token.token,
  //       },
  //     })
  //     .then((res) => setData(res.data))
  //     .catch((err) => console.log(err.data));
  // });

  // if (!token) {
  //   return navigate("/Login");
  // }

  // const logout = (e) => {
  //   setToken(null);
  //   return navigate("/Login");
  // };
  return (
    <div>
      <div className="image__container">
        <img
          style={{ width: "100vw", height: "10vh" }}
          src="https://images.unsplash.com/photo-1546448396-6aef80193ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
        />
      </div>

      <div>
        <p>Welcome to E-commers website</p>
      </div>
      {/* <p>Hi this home page</p> */}

      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <p class="font-weight-bold"> Watch store</p>
          </a>
          <img
            class="dropdown-toggle"
            src={profile}
            wdith="100px"
            height="100px"
            alt="hi"
          ></img>
        </div>
      </nav>
      {data ? (
        <center>
          <br />
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Welcome : {data.username}</h5>
              <button className="btn btn-primary" onClick={() => logout()}>
                Logout
              </button>
            </div>
          </div>
        </center>
      ) : null} */}
    </div>
  );
}

export default Home;
