import React from "react";
import Titel from "./Titel";
import Card from "./Card";
import Edu from "../data/Edu";

const Resume = () => {
  const datas = {
    bgLine: "Resume",
    mainLine: "Resume",
    subLine: "Know about my Education",
  };

  return (
    <>
      <div className="container py-5">
        <div className="row g-3">
          <Titel data={datas} />
          {Edu.map((item, ind) => (
            <Card key={ind} item={item} />
          ))}
          <div className="text-center py-5">
            <button className="btn1 rounded-pill">
              <a
                href="https://drive.google.com/file/d/1BYJDpqiCvE53ZEooycInaM-rda_1rVD6/view?usp=sharing"
                className="cvlink"
              >
                Downlod cv
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
