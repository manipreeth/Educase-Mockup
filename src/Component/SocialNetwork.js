import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

function SocialNetwork() {
  return (
    <div className="socialNetwork">
      <a href="#">
        <FcGoogle />
      </a>
      <a href="#" className="fbIcon">
        <FaFacebookF />
      </a>
      <a href="#" className="twitterIcon">
        <BsTwitter />
      </a>
    </div>
  );
}

export default SocialNetwork;
