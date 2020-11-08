import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function LandingPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const [teacher, setTeacher] = useState("teacher");
  const [student, setStudent] = useState("student");

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
          <button className="login__signInButton" type="submit">
            Login
          </button>
        </form>
      </div>
      <div className="register__login">
        <h2>Sign up as</h2>
        <div className="btn__grp">
          <Link
            to={{
              pathname: "/signup",
              state: teacher,
            }}
          >
            Teacher
          </Link>
          <Link
            to={{
              pathname: "/signup",
              state: student,
            }}
          >
            Student
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
