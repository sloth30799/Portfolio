import React from "react"
import cardBg from "../assets/code-card.svg"

const Service = ({ img, title, caption }) => {
  return (
    <article className="relative mb-3 border-r-4">
      <img src={cardBg} alt="" className="z-0 shadow-card" />
      <div className="absolute left-[90px] top-[260px] transform rotate-90 -translate-y-full font-title text-2xl leading-10 whitespace-nowrap">
        {"<>"}
        {title}
      </div>
      <div className="absolute z-10 font-body top-10 left-10">
        <p>///</p>
        <p className="h-24 overflow-hidden text-sm leading-none font-body w-36">
          {caption}
        </p>
      </div>
      <img
        src={img}
        alt=""
        className="z-10 h-[380px] w-[220px] absolute inset-x-3 -bottom-8 rounded-lg grayscale hover:grayscale-[0.5]"
      />
    </article>
  )
}

export default Service
