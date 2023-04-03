import React from "react"
import { BiArrowFromLeft } from "react-icons/bi"
import { Link } from "react-router-dom"
import {
  SiExpress,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

const styles = {
  box: `flex flex-col gap-6 p-3 lg:p-0 lg:flex-row lg:my-6`,
  image: `w-full lg:w-1/2`,
  icon: `rounded-lg hover:scale-110 active:scale-90`,
  textBox: `w-full lg:w-1/2 flex flex-col gap-3 justify-center text-center`,
  techText: `font-bold text-xl text-center border-0 border-b-2 pb-3 lg:pb-0 lg:border-0 lg:border-r-2 lg:pr-3`,
}

const Home = () => {
  return (
    <>
      <div className={styles.box}>
        <figure className={styles.image}>
          <img
            src="/img/cloud.jpg"
            alt="Illustration by Semenin Egor from Ouch!"
            className=""
          />
        </figure>
        <div className={styles.textBox}>
          <h1 className="text-xl lg:text-xl font-bold tracking-wide">
            Hi, I'm Han Ye Htun. A software engineer.
          </h1>
          <span className="text-accent text-lg font-bold tracking-tight">
            Web, Software and Design
          </span>
          <p className="text-lg tracking-tight">
            Serving Full-fat, extra sugar, deep-fried amazing ideas
          </p>
          <div className="flex flex-col gap-3 items-end place-self-end mt-6 lg:flex-row">
            <Link to="contact">
              <button className="btn bg-black text-white rounded">
                Let's chat!
              </button>
            </Link>
            <Link to="about">
              <button className="btn rounded">
                More About me
                <BiArrowFromLeft size={"1.5rem"} />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 justify-center items-center my-6 lg:mt-12">
        <h1 className={styles.techText}>Tech stack</h1>
        <div className="grid grid-cols-4 gap-6 items-center justify-center lg:grid-cols-none lg:grid-flow-col lg:grid-rows-1">
          <SiTypescript size={"2.5rem"} className={styles.icon} />
          <SiNextdotjs size={"2.5rem"} className={styles.icon} />
          <SiReact size={"2.5rem"} className={styles.icon} />
          <SiMongodb size={"2.5rem"} className={styles.icon} />
          <SiExpress size={"2.5rem"} className={styles.icon} />
          <SiNodedotjs size={"2.5rem"} className={styles.icon} />
          <SiMui size={"2.5rem"} className={styles.icon} />
          <SiTailwindcss size={"2.5rem"} className={styles.icon} />
        </div>
      </div>
    </>
  )
}

export default Home
