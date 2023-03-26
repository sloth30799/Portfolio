import React from "react"
import { Link } from "react-router-dom"
import Project from "../components/Project"
import { BiArrowFromLeft } from "react-icons/bi"

const Work = () => {
  return (
    <div>
      <Project
        link={"https://wanderer.onrender.com/"}
        glink={"https://github.com/sloth30799/Wanderer"}
        img={"https://i.imgur.com/zhY50vE.png"}
        title={"Wanderer"}
        caption={
          "Explore new places with Wanderer - the ultimate backpacker app that lets you plan your travels, share your experiences, and connect with like-minded travelers from all around the world."
        }
      />
      <Project
        link={"https://wanderer-store.vercel.app/"}
        glink={"https://github.com/sloth30799/Wanderer-Store"}
        img={"https://i.imgur.com/YAZxKV4.jpg"}
        title={"Wanderer Store"}
        caption={
          "Shop for your adventure with Wanderer Store - a fast and secure e-commerce app that offers a wide range of backpacks to enhance your travel experience."
        }
      />
      <Project
        link={"https://tackletalk.onrender.com/"}
        glink={"https://github.com/sloth30799/TackleTalk"}
        img={"https://i.imgur.com/fc6cwbQ.png"}
        title={"TackleTalk"}
        caption={
          "Join the football fandom with TackleTalk - a social app that lets you connect with fellow fans, share your passion, and join communities and met people with similar interests."
        }
      />
      <Project
        link={"https://akino.netlify.app/"}
        glink={""}
        img={"https://i.imgur.com/9Dkp88W.png?1"}
        title={"Akino Restaurant"}
        caption={
          "Satisfy your taste buds with Akino Restaurant - a beautifully designed website that showcases the best of Japanese cuisine. Come and experience the flavors of Akino today!"
        }
      />
      <div className="mt-3 flex justify-end mr-3">
        <Link to="/contact">
          <button className="btn gap-2">
            Contact
            <BiArrowFromLeft size={"1.5rem"} />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Work
