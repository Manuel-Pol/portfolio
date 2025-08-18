import React from "react";
import "./style.css";
import profilePic from "../../assets/Logo_River_Plate.png";

export default function Home() {
  return (
    <div className="grid-container">
      <div className="section profile">
        <div className="profile-pic">
          <img src={profilePic} alt="Foto" />
        </div>
      </div>

      <div className="section qualifications">
        <div className="content">
          <div className="title">
            <p>Welcome to my portfolio</p>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla vitae orci egestas tempor. Integer nec est sed lorem
              faucibus posuere. Curabitur sit amet semper ligula. Morbi dictum,
              tortor nec dictum pulvinar, sapien ipsum aliquam eros, ut gravida
              lacus lorem ac massa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
