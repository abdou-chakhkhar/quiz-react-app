import React from "react";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import SignUpFormTeacher from "./Pages/SignUpFormTeacher";
import SignUpFormStudent from "./Pages/SignUpFormStudent";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/signup-teacher" exact>
            <SignUpFormTeacher />
          </Route>
          <Route path="/signup-student" exact>
            <SignUpFormStudent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
