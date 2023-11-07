import React from "react"
import { Link } from "react-router-dom"
import { BiArrowFromLeft } from "react-icons/bi"

const styles = {
  container: `container m-auto flex flex-col gap-6 lg:flex-row bg-white p-3 lg:p-6 my-6 border-solid border-black border-2 shadow-black`,
  image: `rounded-sm hidden lg:block w-full lg:w-1/2 grayscale hover:grayscale-[0.5] border`,
  textBox: `w-full p-3 lg:w-1/2 lg:p-0`,
}

const About = () => {
  return (
    <div className="p-3">
      <div className={styles.container}>
        <img
          src="/img/about.webp"
          alt="Illustration by Semenin Egor from Ouch!"
          className={styles.image}
        />

        <div className={styles.textBox}>
          <h1 className="font-title">//About</h1>
          <h2 className="text-3xl font-title">Han Ye Htun</h2>
          <span className="block mb-6 text-xs tracking-wide text-accent">
            Software Engineer
          </span>
          <p className="mb-3 text-sm font-bold">
            Hi there! My name is Han Ye Htun, and I am a driven and passionate
            software engineer, always on the lookout for new challenges and
            opportunities to learn and grow in my field. With my background in
            medicine, I have strong foundation in problem-solving and critical
            thinking skills. <br />
            <br />I am committed to using my skills and knowledge to create
            innovative solutions that make a positive impact on people's lives.
            If you have a project that aligns with my passions and skills, I
            would love to connect and see how we can work together to make a
            difference.
          </p>
          <Link to="/contact" className="flex justify-end mt-6">
            <button className="gap-2 btn btn-primary">
              Contact
              <BiArrowFromLeft size={"1.3rem"} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
