import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import profilePic from "../assets/charmander.png";
import "./styles/Profile.css";

export function Profile() {
  return (
    <div className="profile">
      <div className="profile-pic">
        <img src={profilePic} alt="Foto de perfil" />
      </div>
      <div className="social-links">
        <a
          href="https://mail.google.com/mail/?view=cm&to=poljmanuel@gmail.com"
          title="Send Email"
        >
          <FaEnvelope className="social-icon email" />
        </a>
        <a
          href="https://www.linkedin.com/in/manuel-pol-902653285/"
          title="LinkedIn Profile"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="social-icon linkedin" />
        </a>
        <a
          href="https://github.com/Manuel-Pol"
          title="GitHub Profile"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="social-icon github" />
        </a>
      </div>
    </div>
  );
}

export default Profile;
