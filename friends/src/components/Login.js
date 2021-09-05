import React, { Component, useState } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";
import { useHistory } from "react-router";
import { axiosWithAuth } from "../utilis/axiosWithAuth";
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  const handleChanges = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        history.push("/protected");
      })
      .catch((err) => console.log("Whoops!", { err }));
  };

  return (
    <form onSubmit={login}>
      <h3>Log in</h3>

      <div className="form-group">
        <label>Username</label>
        <input
          type="username"
          name="username"
          value={credentials.username}
          className="form-control"
          placeholder="Enter username"
          onChange={handleChanges}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          className="form-control"
          placeholder="Enter password"
          onChange={handleChanges}
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-dark btn-lg btn-block">
        Sign in
      </button>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
      {isLoading === true && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      )}
    </form>
  );
};

export default Login;
