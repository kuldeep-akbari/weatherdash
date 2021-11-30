import React from 'react'
import "./Developer.css"

function Developer(props) {
    return (
        <div className="card dev-container">
            <div className="card-image">
              <img
                src={props.developer.img}
                className="img-fluid shadow-2-strong rounded profile-pic"
                alt="j profilepicture"
              />
              <div className="cardbody">
              <p className="dev-name no-margin">{props.developer.name}</p>
              <p className="cardtext description1 no-margin">{props.developer.description1}</p>
              {/* <p className="info description2 no-margin">{props.developer.description2}</p> */}
            </div>
            <div className="footer container2">
              <a
                className="icon card-link"
                href={props.developer.gitlink}
              >
                <img
                  src={props.developer.gitlogo}
                  id="imageli1"
                  className="img-fluidrounded git-icon"
                  alt="logo"
                />
              </a>
            </div>
            </div>
        </div>
    )
}

export default Developer;
