import React from "react";
import "./footer.css"
import github from "./assets/icons/Github.png"
import linkedln from "./assets/icons/linkedln.png"

function Footer () {
  return (
    <>
    <div className="container-fluid pt-2 pb ">
      <div className="row text-center p-0 footer">
        <div className="col-lg-2 col-6 p-0 footer">
          <a href="https://github.com/DeiviGT1">
            <img 
            src={github} 
            alt="" 
            className="github"/>
          </a>
        </div>
        <div className="col-lg-2 col-6 p-0 footer">
          <a href="https://www.linkedin.com/in/davidgt1/">
            <img 
            src={linkedln} 
            alt="" 
            className="linkedln"/>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export {Footer}