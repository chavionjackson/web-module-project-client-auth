import axios from "axios";
import React from "react";

class FriendsList extends React.Component {
  state = {
    friendsList: [],
  };
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get("http://localhost:5000/api/friends", { headers: { Authorization: localStorage.getItem('token') } })
      .then((res) => console.log(res))
      .catch((err) => console.log("unable to get data", { err }));
  };
  render() {
    return <h1>Friends List</h1>;
  }
}

export default FriendsList;
