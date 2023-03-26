import React from "react"
import { Link } from "react-router-dom"
import { BiArrowFromLeft } from "react-icons/bi"
import {
  SiExpress,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

const styles = {
  container: `flex flex-col gap-12 p-3 lg:p-0 lg:flex-row`,
  image: `w-full lg:w-1/2`,
  textBox: `w-full p-3 lg:w-1/2 lg:p-0`,
}

const About = () => {
  return (
    <div className={styles.container}>
      <figure className={styles.image}>
        <img
          src="/img/hero.jpg"
          alt="Illustration by Semenin Egor from Ouch!"
        />
      </figure>
      <div className={styles.textBox}>
        <h2 className="text-3xl font-bold">Han Ye Htun</h2>
        <span className="text-accent font-lg font-semibold">
          Software Engineer
        </span>
        <p className="text-lg mb-3">
          Hi there! My name is Han Ye Htun, and I am a driven and passionate
          software engineer, always on the lookout for new challenges and
          opportunities to learn and grow in my field. With my background in
          medicine, I have strong foundation in problem-solving and critical
          thinking skills. <br />
          <br />I am committed to using my skills and knowledge to create
          innovative solutions that make a positive impact on people's lives. If
          you have a project that aligns with my passions and skills, I would
          love to connect and see how we can work together to make a difference.
        </p>
        <hr />
        <div className="my-6 flex flex-col gap-6">
          <h1 className="font-extrabold text-2xl">Techs I use</h1>
          <div>
            <h1 className="text-xl font-bold my-6">- Front-end</h1>
            <div className="flex gap-6">
              <h1>
                <SiNextdotjs size={"2.5rem"} />
              </h1>
              <h1>
                <SiReact size={"2.5rem"} />
              </h1>
              <h1>
                <SiMui size={"2.5rem"} />
              </h1>
              <h1>
                <SiTailwindcss size={"2.5rem"} />
              </h1>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold my-6">- Back-end</h1>
            <div className="flex gap-6">
              <h1>
                <SiTypescript size={"2.5rem"} />
              </h1>
              <h1>
                <SiMongodb size={"2.5rem"} />
              </h1>
              <h1>
                <SiExpress size={"2.5rem"} />
              </h1>
              <h1>
                <SiNodedotjs size={"2.5rem"} />
              </h1>
            </div>
          </div>
          <div className="grid grid-rows-4 grid-flow-col lg:grid-flow-row lg:grid-cols-4 gap-3"></div>
        </div>
        <Link to="/skill" className="flex justify-end mt-6">
          <button className="btn gap-2">
            Skills To offer
            <BiArrowFromLeft size={"1.5rem"} />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default About
