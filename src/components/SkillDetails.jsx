import React from "react"
import cardBg from "../assets/code-card.svg"

const Service = ({ img, title, caption }) => {
  return (
    <div className="relative">
      <img src={cardBg} alt="" className="z-0 shadow-card" />
      <div className="absolute left-[280px] top-[80px] transform rotate-90 -translate-y-full font-title text-3xl">
        {"<>"}
        <span className="absolute leading-10 whitespace-nowrap">{title}</span>
      </div>
      <div className="absolute top-10 left-10 z-10 font-bold">
        <p>///</p>
        <h1 className="text-xs h-24 w-36 overflow-hidden">{caption}</h1>
      </div>
      <img
        src={img}
        alt=""
        className="z-10 h-[380px] w-[260px] absolute inset-x-2 -bottom-7 rounded-lg grayscale hover:grayscale-0"
      />
    </div>
  )
}

export default Service
