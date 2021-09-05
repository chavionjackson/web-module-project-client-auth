import React, { Component } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";
export default class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: "",
      isLoading: false,
    },
  };

  handleChanges = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
      })
      .catch((err) => console.log("Whoops!", { err }));
  };

  render() {
    return (
      <form onSubmit={this.login}>
        <h3>Log in</h3>

        <div className="form-group">
          <label>Username</label>
          <input
            type="username"
            name="username"
            value={this.state.credentials.username}
            className="form-control"
            placeholder="Enter username"
            onChange={this.handleChanges}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            className="form-control"
            placeholder="Enter password"
            onChange={this.handleChanges}
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
        {this.state.credentials.isLoading === true && (
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
  }
}
