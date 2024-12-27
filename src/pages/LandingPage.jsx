import React from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to Apple Watch Studio</h1>
      <p>Customize your Apple Watch to suit your style.</p>
      <Link to="/customize" className="start-customization-btn">
        Start Customization
      </Link>
    </div>
  );
}

export default LandingPage;
