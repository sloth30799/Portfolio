import React from "react"
import { Link } from "react-router-dom"
import Project from "../components/Project"
import { BiArrowFromLeft } from "react-icons/bi"

const Work = () => {
  return (
    <div>
      <Project
        link={"https://next-mastery-store.vercel.app/"}
        glink={"https://github.com/sloth30799/Next-Mastery-Store"}
        img={"https://i.imgur.com/ltP0NwB.jpg"}
        title={"Next Mastery Store"}
        caption={
          "Nextjs, Typescript, Sanity.io, Stripe - An e-commerce app with sanity content management system and stripe payment platform."
        }
      />
      <Project
        link={"https://wanderer.onrender.com/"}
        glink={"https://github.com/sloth30799/Wanderer"}
        img={"https://i.imgur.com/zhY50vE.png"}
        title={"Wanderer"}
        caption={
          "Node.js, Express.js, MongoDb, React - Backpacker App with travel planning and blog posting."
        }
      />
      <Project
        link={"https://tackletalk.onrender.com/"}
        glink={"https://github.com/sloth30799/TackleTalk"}
        img={"https://i.imgur.com/fc6cwbQ.png"}
        title={"TackleTalk"}
        caption={
          "Node.js, Express.js, MongoDb, Ejs - Social App for football fans."
        }
      />
      <Project
        link={"https://dinner-dice.onrender.com/"}
        glink={"https://github.com/sloth30799/Dinner-Dice"}
        img={"https://i.imgur.com/0IhyYXp.png?1"}
        title={"Dinner-Dice"}
        caption={
          "Boostrap, React.js, JavaScript - This tool is designed to help you come up with new and exciting recipe ideas by generating random recipes for you to try."
        }
      />
      <Project
        link={"https://akino.netlify.app/"}
        glink={""}
        img={"https://i.imgur.com/9Dkp88W.png?1"}
        title={"Akino Restaurant"}
        caption={"HTML, CSS, JS - Responsive Website for Akino Restaurant."}
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
