import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class LoginHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <center>
        <div className="loginContainer">
          <div className="innercontainer">
            <Link to="/Register">
              <button>Sing-in</button>
            </Link>
            <Link to="/Login">
              <button>Login </button>
            </Link>
          </div>
        </div>
      </center>
    );
  }
}
