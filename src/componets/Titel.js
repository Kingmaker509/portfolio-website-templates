import React from 'react'

const Titel = ({data}) => {
  return (
    <>
      <div className="position-relative text-center">
        <h1 className="mt-2 fs-8 position-absolute bg-text1">{data.bgLine}</h1>
        <h1 className=" fw-bold uper-text1">{data.mainLine}</h1>
        <p className="text-secondary">{data.subLine}</p>
      </div>
    </>
  );
}

export default Titel