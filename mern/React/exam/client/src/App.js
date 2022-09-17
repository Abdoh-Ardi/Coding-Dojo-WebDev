
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
// import Users from "./components/Users";
import AddProject from "./components/AddProject";
import ProjectsList from "./components/projectsList";
// import logo from './logo.svg';
// import './App.css';
// import { useParams } from "react-router";
// import Root from "./components"
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ProjectsList />
        </Route>
        <Route exact path="/projects/new">
          <AddProject />
        </Route>
      </Switch>
    </BrowserRouter >
  );
}

export default App;
