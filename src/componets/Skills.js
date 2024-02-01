import React from 'react'
import Titel from './Titel';

const Skills = () => {
    const data = {
      bgLine: "Skills",
      mainLine: "Skills",
      subLine: "Know something about my Skills",
    };
  return (
    <>
      <div className="container">
        <div className="row">
          <Titel data={data} />

          <div className="col-md-6 p-3">
            <h3>Photoshop</h3>
            <div class="progress">
              <div
                class="progress-bar bg-gold"
                role="progressbar"
                aria-label="Basic example"
                style={{ width: "80%" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="col-md-6 p-3">
            <h3>React</h3>
            <div class="progress">
              <div
                class="progress-bar bg-gold"
                role="progressbar"
                aria-label="Basic example"
                style={{ width: "91%" }}
                aria-valuenow="91"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="col-md-6 p-3">
            <h3>Node js</h3>
            <div class="progress">
              <div
                class="progress-bar bg-gold"
                role="progressbar"
                aria-label="Basic example"
                style={{ width: "83%" }}
                aria-valuenow="83"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="col-md-6 p-3">
            <h3>HTML 5</h3>
            <div class="progress">
              <div
                class="progress-bar bg-gold"
                role="progressbar"
                aria-label="Basic example"
                style={{ width: "95%" }}
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="col-md-6 p-3">
            <h3>Css</h3>
            <div class="progress">
              <div
                class="progress-bar bg-gold"
                role="progressbar"
                aria-label="Basic example"
                style={{ width: "96%" }}
                aria-valuenow="96"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="col-md-6 p-3">
            <h3>Red Teamming</h3>
            <div class="progress">
              <div
                class="progress-bar bg-gold"
                role="progressbar"
                aria-label="Basic example"
                style={{ width: "60%" }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills