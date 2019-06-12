import React, { Component } from "react";
import { Link } from "react-router-dom";
import Friend from "./Friend";

import axios from "axios";

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState(() => ({ friends: res.data }));
      })
      .catch(err => {
        console.error("Server Error", err);
      });
  }

  render() {
    return (
      <div className="friends-list">
        {this.state.friends.map(friend => {
          return (
            <Link
              onClick={event => this.props.idHandler(event, friend.id)}
              key={friend.id}
              to={`/friends/${friend.id}`}
            >
              {" "}
              <Friend
                friend={friend}
                deleteFriend={this.props.deleteFriend}
              />{" "}
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Friends;
