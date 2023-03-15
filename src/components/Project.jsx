import React from "react"
import { BsGithub } from "react-icons/bs"
import { BiLinkExternal } from "react-icons/bi"

const Project = ({ link, glink, img, title, caption }) => {
  return (
    <div className="card card-side w-full p-6 rounded-none border-solid border-0 border-b flex flex-col lg:flex-row gap-3">
      <figure className="w-full lg:w-1/2 rounded">
        <img src={img} alt="Website images" />
      </figure>
      <div className="card-body w-full lg:w-1/2">
        <h2 className="card-title text-darkBlue font-bold">{title}</h2>
        <p>{caption}</p>
        <div className="card-actions justify-end mt-3">
          <a href={glink} target="_blank">
            <button className="btn bg-black text-white gap-2">
              <BsGithub /> Github
            </button>
          </a>
          <a href={link} target="_blank">
            <button className="btn bg-black text-white gap-2">
              <BiLinkExternal /> Site
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
