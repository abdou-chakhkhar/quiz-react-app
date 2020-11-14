import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function SignUpFormTeacher() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  let location = useLocation();

  let jsx;
  if (location.state === "teacher") {
    jsx = "teacher signup form";
  } else if (location.state === "student") {
    jsx = "student signup form";
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked");
    const response = await fetch("http://localhost:5000/users", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: userName,
        password: password,
        email: email,
        lastName: lastName,
        firstName: firstName,
      }),
    });
    console.log(response);
  };

  return (
    <div className="signup__form">
      {jsx}
      <form>
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="enter username"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
        <input
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="LastName"
        />
        <input
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="first name"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="enter password"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default SignUpFormTeacher;
