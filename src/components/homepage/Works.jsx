import React from "react"
import WorkDetail from "./WorkDetail"
import wandererBg from "../../assets/img/wanderer.jpeg"
import wandererStoreBg from "../../assets/img/wanderer-store.jpeg"
import tackletalkBg from "../../assets/img/tackletalk.jpeg"
import akinoBg from "../../assets/img/akino.jpeg"

const projects = [
  {
    link: "https://wanderer.onrender.com/",
    glink: "https://github.com/sloth30799/Wanderer",
    img: wandererBg,
    title: "Wanderer",
    caption:
      "Explore new places with Wanderer - the ultimate backpacker app that lets you plan your travels, share your experiences, and connect with like-minded travelers from all around the world.",
    badge: "Full-stack",
  },
  {
    link: "https://wanderer-store.vercel.app/",
    glink: "https://github.com/sloth30799/Wanderer-Store",
    img: wandererStoreBg,
    title: "Wanderer Store",
    caption:
      "Shop for your adventure with Wanderer Store - a fast and secure e-commerce app that offers a wide range of backpacks ,to enhance your travel experience.",
    badge: "E-commerce",
  },
  {
    link: "https://tackletalk.onrender.com/",
    glink: "https://github.com/sloth30799/TackleTalk",
    img: tackletalkBg,
    title: "TackleTalk",
    caption:
      "Join the football fandom with TackleTalk - a social app that lets you connect with fellow fans, share your passion and join communities and met people with similar interests.",
    badge: "Social App",
  },
  {
    link: "https://akino.netlify.app/",
    glink: "",
    img: akinoBg,
    title: "Akino Restaurant",
    caption:
      "Satisfy your taste buds with Akino Restaurant - a beautifully designed website that showcases the best of Japanese cuisine. Come and experience the flavors of Akino today!",
    badge: "Design",
  },
]

const Works = () => {
  return (
    <div className="bg-white py-6 px-3">
      <div className="container m-auto">
        <h1 className="font-title text-3xl"> // Some Work</h1>
        {projects.map((project) => (
          <WorkDetail
            badge={project.badge}
            caption={project.caption}
            img={project.img}
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

export default Works
