import React from "react";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import SignUpForm from "./Pages/SignUpForm";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/signup" exact>
            <SignUpForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
