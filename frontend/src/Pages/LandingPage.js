import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function LandingPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const SignIn = (e) => {
    e.preventDefault();
  };
  const SignUp = (e) => {
    e.preventDefault();

    document.getElementById("clearE").value = "";
    document.getElementById("clearP").value = "";
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Login</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            id="clearE"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            id="clearP"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={SignIn}
          >
            Login
          </button>
        </form>
      </div>
      <div className="register__login">
        <h2>Sign up as</h2>
        <div className="btn__grp">
          <Link to="/signup-teacher">Teacher</Link>
          <Link to="/signup-student">Student</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
