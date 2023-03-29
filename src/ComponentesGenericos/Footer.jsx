import React from "react";

import github from "../assets/icons/Github.png"
import linkedln from "../assets/icons/linkedln.png"
import instagram from "../assets/icons/instagram.png"

function Footer () {
  return (
    <>
    <div className="container-fluid pb ">
      <div className="row text-center p-0 contFooter">
          <div className="col-lg-2 col-6 p-0 footer">
            <a 
            href="https://github.com/DeiviGT1"
            target="_blank">
              <img 
              src={github} 
              alt="" 
              className="github"
              aria-label="github"/>
            </a>
          </div>
          <div className="col-lg-2 col-6 p-0 footer">
            <a 
              href="https://www.linkedin.com/in/davidgt1/"
              target="_blank">
              <img 
              src={linkedln} 
              alt="" 
              className="linkedln"
              aria-label="linkedln"/>
            </a>
          </div>
          <div className="col-lg-2 col-6 p-0 footer">
            <a 
            href="https://www.instagram.com/davidgt1163/"
            target="_blank">
              <img 
              src={instagram} 
              alt="" 
              className="instagram"
              aria-label="instagram"
              />
            </a>
          </div>
          <div className="col footer"></div>
          
      </div>
    </div>
    </>
  )
}

export {Footer}