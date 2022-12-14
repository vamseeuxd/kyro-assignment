import React from "react";
import "./App.css";
import { SideNav } from "./layout/side-nav/SideNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyProfile from "./pages/MyProfile/MyProfile";

function App() {
  return (
    <Router>
      <SideNav>
        <Switch>
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
          <Route path="/projects">
            <h1>Projects</h1>
          </Route>
          <Route path="/dashboard">
            <h1>Dashboard</h1>
          </Route>
          <Route path="/messages">
            <h1>Messages</h1>
          </Route>
          <Route path="/documents">
            <h1>Documents</h1>
          </Route>
          <Route path="/organizations">
            <h1>Organizations</h1>
          </Route>
          <Route path="/settings">
            <h1>Settings</h1>
          </Route>
          <Route path="/myProfile">
            <MyProfile/>
          </Route>
        </Switch>
      </SideNav>
    </Router>
  );
}

export default App;
