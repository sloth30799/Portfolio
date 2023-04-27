import React from "react"
import { Link } from "react-router-dom"
import { BiArrowFromLeft } from "react-icons/bi"
import { motion } from "framer-motion"

const styles = {
  container: `container m-auto flex flex-col gap-12 lg:flex-row bg-white p-3 lg:py-6 lg:px-12 my-6 border-solid border-black border-2 shadow-black`,
  image: `w-full lg:w-1/2 grayscale hover:grayscale-0`,
  textBox: `w-full p-3 lg:w-1/2 lg:p-0`,
}

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
}

const About = () => {
  return (
    <div className="p-3">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={styles.container}
      >
        <img
          src="/img/about.jpg"
          alt="Illustration by Semenin Egor from Ouch!"
          className={styles.image}
        />

        <div className={styles.textBox}>
          <h1 className="font-title">//About</h1>
          <h2 className="text-3xl font-title">Han Ye Htun</h2>
          <span className="text-accent text-xs font-title tracking-wide">
            Software Engineer
          </span>
          <p className="mb-3">
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
            <button className="btn gap-2 btn-primary">
              Contact
              <BiArrowFromLeft size={"1.3rem"} />
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default About
