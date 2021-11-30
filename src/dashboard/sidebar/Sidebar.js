import React from "react";
import "./Sidebar.css";
import { useState } from "react";
import Select from "react-select";
import { Cities } from "./cities";

function Sidebar(props) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (e) => {
    setSelectedOption(e);
    // props.changCity(e.latitude, e.longitude, e.value);
    console.log("sidebar : " + e.latitude + " " + e.longitude + " " + e.value);
  };

  return (
    <div>
      <Select
        placeholder="Select Option"
        value={selectedOption}
        options={Cities}
        onChange={handleChange}
      />
    </div>
  );
}

export default Sidebar;
