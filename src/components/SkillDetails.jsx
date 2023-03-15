import React from "react"

const Service = ({ img, title, caption }) => {
  return (
    <div className="card w-3/4 lg:w-96 bg-white shadow-xl border-2 rounded-lg">
      <figure className="px-5 pt-5 h-96">
        <img src={img} alt="Illustration from Ouch!" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl text-darkBlue font-bold">{title}</h2>
        <p>{caption}</p>
      </div>
    </div>
  )
}

export default Service
