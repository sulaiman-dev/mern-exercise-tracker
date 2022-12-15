import React from "react";
import { Route, Routes } from "react-router-dom";
import ExercisesList from "./components/exercise-list.component";
import Navbar from "./components/navbar.component";
import EditExercise from "./components/edit-exercise.compoent";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<ExercisesList />} />
        <Route path="/edit/:id" element={<EditExercise />} />
        <Route path="/create" element={<CreateExercise />} />
        <Route path="/user" element={<CreateUser />} />
      </Route>
    </Routes>
  );
}

export default App;
