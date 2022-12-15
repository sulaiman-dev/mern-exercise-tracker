import React, { Component } from "react";
import axios from "axios";
import { Button, Container, Input, Text } from "@mantine/core";

export default class createUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };
    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res));

    console.log(user);
    this.setState({
      username: "",
    });
  }

  render() {
    return (
      <Container>
        <Text fs={30} fw={500}>
          Create New User
        </Text>
        <form onSubmit={this.onSubmit}>
          <Input.Label required>Username:</Input.Label>
          <Input
            placeholder="Enter Username"
            required
            onChange={this.onChangeUsername}
            value={this.state.username}
          />
          <Button>Create Exercise Log</Button>
        </form>
      </Container>
    );
  }
}
