import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/friends", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res);
        setFriends(res.data);
      })
      .catch((err) => console.log("unable to get data", { err }));
  }, []);

  return (
    <div className="card-container">
      {friends.map((friend) => (
        <Card key={friend.id} style={{ width: "18rem" }}>
          <CardBody>
            <CardTitle>{friend.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted">
              {friend.age}
            </CardSubtitle>
            <CardText>{friend.email}</CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default FriendsList;
