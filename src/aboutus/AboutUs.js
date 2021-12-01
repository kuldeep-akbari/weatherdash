import "./AboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../img1.jpg";
import img2 from "../img2.jpg";
import lilogo from "../lilogo.png";
import Developer from "./developer/Developer";

function AboutUs() {
  const developers = [
    {
      id: 1,
      img: img1,
      name: "Kuldeep Akbari",
      description1: "Pursuing MS in CS from PSU",
      description2: "Talk is cheap, show me the code",
      gitlink: "https://github.com/kuldeep-akbari",
      gitlogo: lilogo,
    },
    {
      id: 2,
      img: img2,
      name: "Shraddha Revar",
      description1: "Pursuing MS in CS from PSU",
      description2: "Happiness is when your code runs without error",
      gitlink: "https://github.com/ShraddhaRevar",
      gitlogo: lilogo,
    },
  ];

  return (
    <div className="container">
      <p className="card about-title">Developers of WeatherDash</p>
      <div className="flex-container">
        <>
          {developers.map((tempDev) => {
            return <Developer key={tempDev.id}
            developer={tempDev}></Developer>;
          })}
        </>
      </div>
    </div>
  );
}

export default AboutUs;
