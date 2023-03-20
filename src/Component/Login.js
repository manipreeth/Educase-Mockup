import React from "react";
import LoginForm from "./LoginForm";
import SocialNetwork from "./SocialNetwork";
import FooterInfo from "./FooterInfo";

function login() {
  return (
    <div className="loginForm">
      <LoginForm />
      <SocialNetwork />
      <FooterInfo />
    </div>
  );
}

export default login;
