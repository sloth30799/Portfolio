import React from "react"
import { Link } from "react-router-dom"

const Cta = () => {
  return (
    <div className="py-6">
      <div className="h-[300px] text-black container m-auto p-6 ">
        <div className="flex items-center flex-col gap-6">
          <span className="font-title self-start">//Contact</span>
          <div className="flex items-center gap-3 flex-col">
            <h1 className="font-extrabold text-4xl text-grey">
              Want to work with me? Hit me up.
            </h1>
            <Link to="contact">
              <button className="btn btn-secondary">Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cta
