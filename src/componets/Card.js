import React from 'react'

const Card = ({item}) => {
  return (
    <>
      <div className="col-md-6 py-3">
        <div class="card border-0">
          <div class="card-body bg-gray p-4">
            <h5 class="card-title primary bg-transparent fs-2 fw-bold">{item.year}</h5>
            <h6 class="card-subtitle mb-2 bg-transparent white fs-2 fw-bold">
              {item.tital}
            </h6>
            <p className="text-secondary bg-transparent fs-5">{item.university}</p>
            <p class="card-text text-secondary bg-transparent">{item.summary}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card