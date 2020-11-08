import React from "react";
import { useLocation } from "react-router-dom";

function SignUpFormTeacher() {
  let location = useLocation();
  console.log(location);
  let jsx;
  if (location.state === "teacher") {
    jsx = "teacher signup form";
  } else if (location.state === "student") {
    jsx = "student signup form";
  }
  return <div>{jsx}</div>;
}

export default SignUpFormTeacher;
