import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ExercisesList from "./components/exercise-list.component";
import Navbar from "./components/navbar.component";
import EditExercise from "./components/edit-exercise.compoent";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    // <Routes>
    //   <Router>
    //     <div className="container">
    //       <Navbar />
    //       <br />
    //       <Route path="/" exact component={ExercisesList} />
    //       <Route path="/edit/:id" component={EditExercise} />
    //       <Route path="/create" component={CreateExercise} />
    //       <Route path="/user" component={CreateUser} />
    //     </div>
    //   </Router>
    // </Routes>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<ExercisesList />} />
        <Route path="/edit/:id" element={<EditExercise />} />
        <Route path="/create" element={<CreateExercise />} />
        <Route path="/user" element={<CreateUser />} />
        {/* testing routes */}
        {/* <Route path="/new" element={<MapTest />} />
              <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
