import React, { useState } from "react";
import { axiosWithAuth } from "../utilis/axiosWithAuth";

const NewFriend = () => {
    const [friendData, setFriendData] = useState({
        id: Date.now(),
        name: '',
        age: '',
        email: '',
    })

  const handleChange = (e) => {
    setFriendData({
        ...friendData,
        [e.target.name]: e.target.value,
    });
  };

  const addFriend = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("api/friends", friendData)
      .then((res) => {
        console.log(res)

      })
      .catch((err) => {
        console.log(err);
      });
  };

    console.log(friendData);
    return (
      <div className="new-friend">
        <form onSubmit={addFriend}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="name"
              name="name"
              value={friendData.name}
              className="form-control"
              placeholder="Enter name"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input
              type="age"
              name="age"
              value={friendData.age}
              className="form-control"
              placeholder="Enter age"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={friendData.email}
              className="form-control"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Add
          </button>
        </form>
      </div>
    );
  }

export default NewFriend;
