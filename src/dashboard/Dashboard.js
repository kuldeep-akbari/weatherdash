import "./Dashboard.css";
import "../index.css";
import { useState } from "react";
import temperature from "../temperature.png";
import wind from "../wind.png";
import soil from "../soil.png";
import precipitation from "../precipitation.png";
import humidity from "../humidity.png";

function Dashboard({ props }) {
  return (
    <div>
      <div className="container">
        {/* <div className="row">
          <div className="col-md-3 sidebar"></div>
          <div className="col-md-9 main"></div>
        </div> */}

        <div className="dashboard-flex-container"></div>
      </div>
    </div>
  );
}

export default Dashboard;
