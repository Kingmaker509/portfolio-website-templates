import React from "react";
import Titel from "./Titel";
import Card from "./Card";
import Edu from '../data/Edu'

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
            <Card key={ind} item={item}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Resume;
