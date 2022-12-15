import React, { Component } from "react";
import axios from "axios";
import { Container, Text, Select, Button, Input } from "@mantine/core";
import { DatePicker } from "@mantine/dates";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/users/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map((user) => user.username),
            username: response.data[0].username,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onChangeUsername(e) {
    this.setState({
      username: e,
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  onChangeDuration(e) {
    this.setState({
      duration: e.target.value,
    });
  }
  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    console.log(exercise);
    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((res) => console.log(res.data));
    window.location = "/";
  }

  render() {
    return (
      <Container>
        <Text fs={30} fw={500}>
          Create New Exercise Log
        </Text>
        <form onSubmit={this.onSubmit}>
          <Select
            label="Username:"
            placeholder="Select User"
            defaultValue={this.state.users[0]}
            value={this.state.username}
            onChange={this.onChangeUsername}
            data={this.state.users}
            withAsterisk
          />
          <Input.Label required>Description:</Input.Label>
          <Input
            placeholder="Description"
            required
            value={this.state.description}
            onChange={this.onChangeDescription}
          />
          <Input.Label required>Duration (in minutes):</Input.Label>
          <Input
            placeholder="Duration"
            required
            value={this.state.duration}
            onChange={this.onChangeDuration}
          />
          <DatePicker placeholder="Pick date" label="Date:" withAsterisk />
          <Button>Create Exercise Log</Button>
        </form>
      </Container>
    );
  }
}
