import React, { useState, useContext } from "react";
import "../Login/Register.scss";
import axios from "axios";
import { store } from "../../App";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const [token, settoken] = useContext(store);
  const navigate = useNavigate();

  const handelChange = (e) => {
    const a = e.target.name;
    const b = e.target.value;
    setdata({ ...data, [a]: b });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5001/login", data);
      const tokendata = response.data;
      settoken(tokendata);
      if (tokendata) {
        return navigate("/Home");
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };
  return (
    <>
      <p>Welcom to watch store </p>
      <p>Please Login here</p>
      <div className="registerContainer">
        <form
          name="registerForm"
          onSubmit={(e) => submit(e)}
          // action="/login"
          className="registerSecondContainer"
        >
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={(e) => handelChange(e)}
            required
          ></input>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={(e) => handelChange(e)}
            required
          ></input>
          <input type="submit" value="submit"></input>
        </form>
      </div>
    </>
  );
}

export default Login;
