import React from "react";
import SignupForm from "./SignupForm";
import SocialNetwork from "./SocialNetwork";
import SignupFooter from "./SignupFooter";

function Signup() {
  return (
    <div className="loginForm">
      <SignupForm />
      <SocialNetwork />
      <SignupFooter />
    </div>
  );
}

export default Signup;
