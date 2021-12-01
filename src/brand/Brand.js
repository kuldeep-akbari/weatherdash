import React from "react";
import "./Brand.css";
import logo from "../logo192.png";

function Brand() {
  return (
    <div className="nav-brand">
      <img className="nav-brand-img" src={logo} alt="icon" />
      WeatherDash
    </div>
  );
}

export default Brand;
