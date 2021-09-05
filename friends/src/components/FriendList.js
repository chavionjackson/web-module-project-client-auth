import axios from "axios";
import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

class FriendsList extends React.Component {
  state = {
    friendsList: [],
  };
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get("http://localhost:5000/api/friends", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res);
        this.setState({
          friendsList: res.data,
        });
      })
      .catch((err) => console.log("unable to get data", { err }));
  };
  render() {
    return (
      <div className="card-container">
        <h1>My Friends!</h1>
        {this.state.friendsList.map((friend) => (
          <Card key={friend.id} style={{ width: "18rem" }}>
            <CardBody>
              <CardTitle>{friend.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted">
                {friend.age}
              </CardSubtitle>
              <CardText>
                {friend.email}
              </CardText>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }
}

export default FriendsList;
