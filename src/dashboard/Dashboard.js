import "./Dashboard.css";
import "../index.css"
import Sidebar from "./sidebar/Sidebar";

function Dashboard({data}) {

  console.log("longitude is  " + data.longitude);

  return (
    <div >
        <div className="container">
          <div className="row">
            <div className="col-md-3 sidebar">
              <Sidebar/>
            </div>
            <div className="col-md-9 main"></div>
          </div>
        </div>
    </div>
  );
}

export default Dashboard;
 