import "./AboutUs.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../img1.jpg';
import img2 from '../img2.jpg';
import lilogo from '../lilogo.png';



function AboutUs() {
  return (
    <div>
      <header className="App-header">
        <h1>About Us</h1>
      </header>
      <div className="row">
        <div className="col-md-6 col-lg-6  col-sm-12">
          <div className ="card shadow-sm p-3" style={{width:`20em`}} >
            <div className="card-image">
            <img src={img1} id="image1" class="img-fluid shadow-2-strong rounded" alt="j profilepicture" />
            </div>
            <div className="cardbody">
              <h4>Kuldeep Akbari</h4>
              <p className= "cardtext">Computer Science graduate student</p>
              <p className="info">Specialize in .....</p>
            </div>
            <div className="footer">
            <a className="icon"   href="https://en.wikipedia.org/wiki/Donald_Trump" class="card-link">
              <img src={lilogo} id="imageli1" class="img-fluidrounded" alt="logo" /> 
            </a>

            </div>
          </div>
        </div>
    
        <div className="col-md-6 col-lg-6  col-sm-12">
          <div className ="card shadow-sm p-3" style={{width:`20em`}} >
            <div className="card-image">
            <img src={img2} id="image2" class="img-fluid shadow-2-strong rounded" alt="j profilepicture" />
            </div>
            <div className="cardbody">
              <h4>Shraddha Revar</h4>
              <p className= "cardtext">Computer Science graduate student</p>
              <p className="info">Specialize in .....</p>
            </div>
            <div className="footer">
            <a href="https://en.wikipedia.org/wiki/Bill_Clinton" class="card-link">
              <img src={lilogo} id="imageli2" class="img-fluid rounded" alt="logo" /> 
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
