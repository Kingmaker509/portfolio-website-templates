import React from "react";
import img1 from "../images/IMG_20231125_175302.jpg";
import img2 from "../images/PicsArt_03-22-08.39.19.jpg";

const Intro = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="container">
              <div className="row g-2">
                <div className="col-md-6 col-12 py-5">
                  <p className=" pt-0 fw-bold pt-md-5 mt-0 mt-md-5 text-center text-md-start primary">
                    Hello!
                  </p>
                  <h1 className="fs-7 fw-bolder text-center text-md-start">
                    I'm <span className="primary">Hiren Hadiya</span>
                  </h1>
                  <h4 className="text-center text-md-start">
                    Full stack developer
                  </h4>
                  <div className="text-center text-md-start py-2">
                    <button className="btn1 rounded-pill">Contact me</button>
                  </div>
                </div>
                <div className="col-md-6 col-12 py-5 my-5">
                  <img src={img1} className="img1" alt="profile1" />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="container">
              <div className="row g-2">
                <div className="col-md-6 col-12 py-5">
                  <p className=" pt-0 fw-bold pt-md-5 mt-0 text-center text-md-start primary">
                    Hello!
                  </p>
                  <h1 className="fs-7 fw-bolder text-center text-md-start">
                    I'm a <span className="primary">Full stack developer</span>{" "}
                    based in INDIA
                  </h1>
                  <div className="text-center text-md-start py-2">
                    <button className="btn1 rounded-pill">Contact me</button>
                  </div>
                </div>
                <div className="col-md-6 col-12 py-5 my-5">
                  <img src={img2} className="img1" alt="profile1" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Intro;
