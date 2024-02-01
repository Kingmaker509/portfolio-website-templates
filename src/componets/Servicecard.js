import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faHatCowboy } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBillTrendUp } from "@fortawesome/free-solid-svg-icons";

const Servicecard = () => {
  return (
    <>
      <div className="col-md-4 col-12">
        <div className="card border-0">
          <div className="card-body bg-gray text-center box">
            <p className="fs-2 pt-4 bg-transparent">
              <FontAwesomeIcon icon={faLaptopCode} className="bg-transparent" />
            </p>
            <p className="card-text mb-5 bg-transparent boxtxt">WEB DESIGN</p>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-12">
        <div className="card border-0">
          <div className="card-body bg-gray text-center box">
            <p className="fs-2 pt-4 bg-transparent">
              <FontAwesomeIcon icon={faCamera} className="bg-transparent" />
            </p>
            <p className="card-text mb-5 bg-transparent boxtxt">PHOTOGRAPHY</p>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-12">
        <div className="card border-0">
          <div className="card-body bg-gray text-center box">
            <p className="fs-2 pt-4 bg-transparent">
              <FontAwesomeIcon icon={faLayerGroup} className="bg-transparent" />
            </p>
            <p className="card-text mb-5 bg-transparent boxtxt">
              WEB DEVELOPER
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-12">
        <div className="card border-0">
          <div className="card-body bg-gray text-center box">
            <p className="fs-2 pt-4 bg-transparent">
              <FontAwesomeIcon icon={faDatabase} className="bg-transparent" />
            </p>
            <p className="card-text mb-5 bg-transparent boxtxt">DATABACE</p>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-12">
        <div className="card border-0">
          <div className="card-body bg-gray text-center box">
            <p className="fs-2 pt-4 bg-transparent">
              <FontAwesomeIcon icon={faHatCowboy} className="bg-transparent" />
            </p>
            <p className="card-text mb-5 bg-transparent boxtxt">RED TEAMMING</p>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-12">
        <div className="card border-0">
          <div className="card-body bg-gray text-center box">
            <p className="fs-2 pt-4 bg-transparent">
              <FontAwesomeIcon
                icon={faMoneyBillTrendUp}
                className="bg-transparent"
              />
            </p>
            <p className="card-text mb-5 bg-transparent boxtxt">BRANDING</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicecard;
