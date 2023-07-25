import React, { useState, useEffect } from "react";
import APIService from "./ApiService";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Nav from "react-bootstrap/Nav";


function SIgnIn() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [token, setToken] = useCookies(["mytoken"]);
  const [isLogin, setLogin] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    if (token["mytoken"]) {
      navigate("/");
    }
  }, [token]);


  const loginBtn = () => {
    APIService.LoginUser({ username, password })
    .then((resp) => {
      if (resp.token) {
        setToken("mytoken", resp.token)
      } else {
        alert("Wrong credentials!")
      }
    })
    .catch(error => console.log(error));
  };

  return (
    <div>
      <h1 className="register-header">Please login</h1>
      <br />
      <br />

      <div className="w-25 m-auto">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Please enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Please enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={loginBtn} className="btn btn-primary">
          Login
        </button>
      </div>
      <br/>
      <h5>Not have account? Please register below</h5>
      <br/>
      <div className="register-btn">
        <Nav.Link href="/privatesignup">
          <button className="regist btn btn-success" onClick={() => setLogin(false)}>
            Register as user
          </button>
        </Nav.Link>
        <Nav.Link href="/agentsignup">
          <button className="btn btn-success" onClick={() => setLogin(false)}>
            Register as agent
          </button>
        </Nav.Link>
      </div>
    </div>
  );
}
export default SIgnIn;
