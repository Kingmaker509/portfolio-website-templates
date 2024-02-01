import React from "react";
import Titel from "./Titel";
import bio from "../data/biodata";

const Contact = () => {
  const data = {
    bgLine: "Contact",
    mainLine: "Contact me",
    subLine: "Contact me for quary",
  };
  return (
    <>
      <div className="container py-5 my-0 my-md-5">
        <div className="row">
          <Titel data={data} />
          <div className="col-md-6 col-12 py-4 bg-2">
            <form className="bg-transparent">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="finput"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="finput"
              />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                className="finput"
              />
              <textarea
                name="message"
                className="finput"
                cols="20"
                rows="5"
                placeholder="Your message..."
              ></textarea>

              <div className="text-center text-md-start py-2 bg-transparent">
                <button className="btn2 rounded-pill">Contact me</button>
              </div>
            </form>
          </div>
          <div className="col-md-6 col-12 py-4">
            {bio.map((item, ind) => (
              <div className="p-5">
                <div className="p-2">
                  <h3>Name :</h3>
                  <h6 className="text-secondary">{item.name}</h6>
                </div>
                <div className="p-2">
                  <h3>Email :</h3>
                  <h6 className="text-secondary">{item.email}</h6>
                </div>
                <div className="p-2">
                  <h3>Phone :</h3>
                  <h6 className="text-secondary">{item.mobile}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
