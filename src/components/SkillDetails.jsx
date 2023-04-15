import React from "react"

const Service = ({ img, title, caption }) => {
  return (
    <div className="card w-3/4 lg:w-96 bg-white border-4 hover:drop-shadow-3xl">
      <figure className="px-5 pt-5 h-96">
        <img src={img} alt="Illustration from Ouch!" className="grayscale" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl text-darkBlue font-extrabold">
          {title}
        </h2>
        <p>{caption}</p>
      </div>
    </div>
  )
}

export default Service
