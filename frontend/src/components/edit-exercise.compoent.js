import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "../utils/withRouter";
import { Button, Container, Input, Select, Text } from "@mantine/core";
import { DatePicker } from "@mantine/dates";

class EditExercise extends Component {
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
      .get("http://localhost:5000/exercises/" + this.props?.params?.id)
      .then((response) => {
        this.setState({
          username: response.data.username,
          description: response.data.description,
          duration: response.data.duration,
          date: new Date(response.data.date),
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/users/")
      .then((response) => {
        this.setState({ users: response.data.map((user) => user.username) });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
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
    axios
      .post(
        "http://localhost:5000/exercises/update/" + this.props?.params?.id,
        exercise
      )
      .then((res) => {
        console.log("exerciseUpdate", res.data);
        window.location = "/";
      })
      .catch((err) => console.log("error in updating exercise", err));
  }

  render() {
    return (
      <Container>
        <Text fs={30} fw={500}>
          Edit Exercise Log
        </Text>
        <form onSubmit={this.onSubmit}>
          <Select
            label="Username:"
            placeholder="Select User"
            // defaultValue={this.state.users[0]}
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
          <DatePicker
            placeholder="Pick date"
            label="Date:"
            withAsterisk
            selected={this.state.date}
          />
          <Button>Edit Exercise Log</Button>
        </form>
      </Container>
    );
  }
}

export default withRouter(EditExercise);
