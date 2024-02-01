import React from 'react'
import img1 from "../images/IMG_20231125_175302.jpg";
import Table from './Table';
import bio from '../data/biodata'

const About = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row g-2">
          <div className="col-md-5 col-12 d-none d-md-block">
            <img src={img1} alt="profile1" className="img1 mx-auto" />
          </div>
          <div className="col-md-7 col-12">
            <div className="position-relative">
              <h1 className="mt-1 fs-8 position-absolute bg-text">About</h1>
              <h1 className=" fw-bold uper-text">About Me</h1>
            </div>
            <p className="text-secondary">Know something about me</p>
            <div>
              {bio.map((item, ind) => (
                <Table key={ind} item={item} />
              ))}
            </div>
            <div className="text-center text-md-start py-5">
              <button className="btn1 rounded-pill">Downlod cv</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About