import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function SignUpFormTeacher() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  let location = useLocation();

  let jsx;
  if (location.state === "teacher") {
    jsx = "teacher signup form";
  } else if (location.state === "student") {
    jsx = "student signup form";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <div className="signup__form">
      {jsx}
      <form>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="enter username"
        />
        <input
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="enter password"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default SignUpFormTeacher;
