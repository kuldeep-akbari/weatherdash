import React from "react";
import "./Sidebar.css"

function Sidebar() {
  return (
    <div>
      <input
        className="form-control rounded fontAwesome"
        type="text"
        placeholder="&#xF002; Search city"
      />
    </div>
  );
}

export default Sidebar;
