import React from 'react';
import code from '../Images/code.png';
import java from '../Images/java.png';
import js from '../Images/js.png';
import mysql from '../Images/mysql.png';
import react from '../Images/react.png';
import Jquery from '../Images/Jquery.png';
import json from '../Images/json.gif';
import Bootstrap from '../Images/bootstrap.png';
import Spring from '../Images/spring.png';
import node from '../Images/node.png';

function Skills() {
    return(
<div className="container px-4 py-5 animate__animated animate__fadeInUp" id="icon-grid">
    <h1 className="pb-2 border-bottom" id='skill'>Skill's</h1>

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
      <div className="col d-flex align-items-start">
        {/* <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg> */}
        <img src={java} className=" text-body-secondary flex-shrink-0 me-3" width="50" height="50" />
        <div >
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Java</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img src={js} className=" text-body-secondary flex-shrink-0 me-3" width="50" height="50" />
      <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">JavaScript</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img src={mysql} className=" text-body-secondary flex-shrink-0 me-3" width="50" height="50" />
      <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">MySql</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img src={code} className=" text-body-secondary flex-shrink-0 me-3" width="50" height="50" />
      <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">HTML & CSS</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img src={react} className=" text-body-secondary flex-shrink-0 me-3" width="50" height="50" />
      <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">React.js</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img src={node} className=" text-body-secondary flex-shrink-0 me-3" width="50" height="50" />
      <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Node.js</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img src={Spring} className=" text-body-secondary flex-shrink-0 me-3" width="50" height="50" />
      <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Spring</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img src={Spring} className=" text-body-secondary flex-shrink-0 me-3" width="50" height="50" />
      <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Spring MVC</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img src={Jquery} className=" text-body-secondary flex-shrink-0 me-3" width="50" height="50" />
      <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Jquery</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img src={json} className=" text-body-secondary flex-shrink-0 me-3" width="50" height="50" />
      <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Json</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <img src={Bootstrap} className=" text-body-secondary flex-shrink-0 me-3" width="50" height="50" />
      <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Bootstrap</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
    </div>
  </div>


    );
}

export default Skills;