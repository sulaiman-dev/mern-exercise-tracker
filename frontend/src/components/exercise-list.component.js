import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { ActionIcon, Container, Group, Table, Text } from "@mantine/core";
import { Edit, Trash } from "tabler-icons-react";
import { useNavigate } from "react-router-dom";

const Exercise = (props) => {
  const navigate = useNavigate();
  return (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0, 10)}</td>
      <td>
        <Group spacing={10}>
          <ActionIcon
            variant="transparent"
            color="#228be6"
            onClick={() => navigate(`/edit/${props.exercise._id}`)}
          >
            <Edit size={16} />
          </ActionIcon>
          <div
            style={{
              borderLeft: "2px solid #495057",
              height: "20px",
            }}
          ></div>
          <ActionIcon
            variant="transparent"
            color="red"
            onClick={() => {
              props.deleteExercise(props.exercise._id);
            }}
          >
            <Trash size={16} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  );
};

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.deleteExercise = this.deleteExercise.bind(this);
    this.state = { exercises: [] };
  }

  componentDidMount() {
    console.log("mounted");
    axios
      .get("http://localhost:5000/exercises/")
      .then((response) => {
        console.log("response", response);
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log("error in getting exercises", error);
      });
  }

  deleteExercise = (id) => {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then((response) => {
        console.log(response.data);
        this.setState({
          exercises: this.state.exercises.filter(
            (exercise) => exercise._id !== id
          ),
        });
      })
      .catch((err) => console.log("error in deleting exercise", err));
  };

  exerciseList = () => {
    return this.state.exercises.map((currentExercise) => {
      return (
        <Exercise
          exercise={currentExercise}
          deleteExercise={this.deleteExercise}
          key={currentExercise._id}
        />
      );
    });
  };
  render() {
    return (
      <Container>
        <Text fw={500} fz="xl" my={15} color="#228be6">
          Logged Exercises
        </Text>
        <Table
          verticalSpacing="sm"
          horizontalSpacing={"xl"}
          // highlightOnHover={true}
          striped
        >
          <thead style={{ background: "rgb(231 245 255)" }}>
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </Table>
      </Container>
    );
  }
}
