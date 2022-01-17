import React from "react";
import { getUsers } from "../services/UserService";

export default class UserList extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    getUsers().then((users) => {
      this.setState({ users });
    });
  }

  render() {
    return (
      <ul>
        {this.state.users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    );
  }
}
