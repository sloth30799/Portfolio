import React from "react"
import { Link } from "react-router-dom"
import Project from "../components/Project"
import { BiArrowFromLeft } from "react-icons/bi"

const projects = [
  {
    link: "https://wanderer.onrender.com/",
    glink: "https://github.com/sloth30799/Wanderer",
    className: " bg-wanderer hover:shadow-3xl",
    title: "Wanderer",
    caption:
      "Explore new places with Wanderer - the ultimate backpacker app that lets you plan your travels, share your experiences, and connect with like-minded travelers from all around the world.",
    badge: "Full-stack",
  },
  {
    link: "https://wanderer-store.vercel.app/",
    glink: "https://github.com/sloth30799/Wanderer-Store",
    className: "bg-wanderer-store",
    title: "Wanderer Store",
    caption:
      "Shop for your adventure with Wanderer Store - a fast and secure e-commerce app that offers a wide range of backpacks ,to enhance your travel experience.",
    badge: "E-commerce",
  },
  {
    link: "https://tackletalk.onrender.com/",
    glink: "https://github.com/sloth30799/TackleTalk",
    className: "bg-tackletalk",
    title: "TackleTalk",
    caption:
      "Join the football fandom with TackleTalk - a social app that lets you connect with fellow fans, share your passion and join communities and met people with similar interests.",
    badge: "Social App",
  },
  {
    link: "https://akino.netlify.app/",
    glink: "",
    className: "bg-akino",
    title: "Akino Restaurant",
    caption:
      "Satisfy your taste buds with Akino Restaurant - a beautifully designed website that showcases the best of Japanese cuisine. Come and experience the flavors of Akino today!",
    badge: "Design",
  },
]

const Work = () => {
  return (
    <div className="bg-white py-6 px-3">
      <div className="container m-auto">
        <h1 className="font-title text-3xl"> // Some Work</h1>
        {projects.map((project) => (
          <Project
            badge={project.badge}
            caption={project.caption}
            className={project.className}
            glink={project.glink}
            link={project.link}
            title={project.title}
            key={project.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Work
