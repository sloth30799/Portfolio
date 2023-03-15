import React from "react"
import { Link } from "react-router-dom"
import { BiArrowFromLeft } from "react-icons/bi"
import SkillDetails from "../components/SkillDetails"

const skillsData = [
  {
    img: "/img/urban-line-man-sitting-on-chair-and-typing-on-laptop.png",
    title: "Static Responsive Websites",
    caption:
      "Get ready for a smooth and seamless website experience on any device! Responsive design is essential in today's multi-device world, as it ensures a consistent and seamless user experience, regardless of the device used to access a website. Let's work together to make your website stand out!",
  },
  {
    img: "/img/urban-line-scientists-studying-atom-by-the-computer.png",
    title: "Full stack Web Apps",
    caption:
      "Bring your ideas to life with the help of a skilled developer! I bring a collaborative approach to software development and work closely with clients and team members to turn their ideas into tangible, functional software. Let's work together to bring your software vision to life and make an impact!",
  },
]

const Skill = () => {
  return (
    <>
      <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 justify-items-center gap-3">
        {skillsData.map((service) => (
          <SkillDetails
            key={service.title}
            img={service.img}
            title={service.title}
            caption={service.caption}
          />
        ))}
      </div>
      <Link to="/work" className="flex justify-end mt-6">
        <button className="btn gap-2">
          My Past Works
          <BiArrowFromLeft size={"1.5rem"} />
        </button>
      </Link>
    </>
  )
}

export default Skill
