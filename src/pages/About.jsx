import React from "react"
import { Link } from "react-router-dom"
import { BiArrowFromLeft } from "react-icons/bi"

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
        <h1 className="underline text-lg my-1 font-semibold">About</h1>
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
        <Link to="/skill" className="flex justify-end mt-6">
          <button className="btn gap-2">
            Services To offer
            <BiArrowFromLeft size={"1.5rem"} />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default About
