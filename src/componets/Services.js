import React from 'react'
import Titel from './Titel'
import Servicecard from './Servicecard';

const Services = () => {
    const data = {
      bgLine: "Services",
      mainLine: "Services",
      subLine: "Know about my Services",
    };
  return (
    <>
        <div className='container py-5 my-0 my-md-5'>
            <div className="row g-4">
                <Titel data={data} />
                <Servicecard />
            </div>
        </div>
    </>
  )
}

export default Services