import React from 'react'
import Titel from './Titel';

const Project = () => {
    const data = {
      bgLine: "Projects",
      mainLine: "My Project",
      subLine: "There some project finish by me",
    };
  return (
    <>
        <div className='container py-5 my-0 my-md-5'>
            <div className="row">
                <Titel data={data} />
            </div>
        </div>
    </>
  )
}

export default Project