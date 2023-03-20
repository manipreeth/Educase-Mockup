import React from "react";

function SignupForm() {
  return (
    <>
      <div>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button className="loginBtn">Register</button>
      </div>

      <p className="loginW">or register with</p>
    </>
  );
}

export default SignupForm;
