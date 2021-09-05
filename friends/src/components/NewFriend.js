import React from "react";
import axios from "axios";

class NewFriend extends React.Component {
  state = {
    friend: {
      id: Date.now,
      name: "",
      age: "",
      email: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value,
      },
    });
  };

  addFriend = (e) => {
    e.preventDefault();
    axios
      .post("/api/friends", this.state.friend)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.friend);
    return (
      <div className="new-friend">
        <form onSubmit={this.login}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="name"
              name="name"
              value={this.state.friend.name}
              className="form-control"
              placeholder="Enter name"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input
              type="age"
              name="age"
              value={this.state.friend.age}
              className="form-control"
              placeholder="Enter age"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.friend.email}
              className="form-control"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default NewFriend;
