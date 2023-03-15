import React from "react"
import { BiArrowFromLeft } from "react-icons/bi"
import { Link } from "react-router-dom"

const styles = {
  container: `flex flex-col gap-6 p-3 lg:p-0 lg:flex-row`,
  image: `w-full lg:w-1/2`,
  textBox: `w-full lg:w-1/2 flex flex-col gap-3 justify-center text-center`,
}

const Home = () => {
  return (
    <div className={styles.container}>
      <figure className={styles.image}>
        <img
          src="/img/cloud.jpg"
          alt="Illustration by Semenin Egor from Ouch!"
          className=""
        />
      </figure>
      <div className={styles.textBox}>
        <h1 className="text-3xl lg:text-5xl font-bold">
          Hi, I'm Han Ye Htun. A software engineer.
        </h1>
        <span className="text-accent text-lg font-bold">
          Web, Software and Design + Serving Full-fat, extra sugar, deep-fried
          amazing ideas
        </span>
        <p className="text-lg">Ready to bring your ideas to life?</p>
        <div className="flex flex-col gap-3 items-end place-self-end mt-6 lg:flex-row">
          <Link to="contact">
            <button className="btn rounded">Let's chat!</button>
          </Link>
          <Link to="about">
            <button className="btn bg-black text-white rounded gap-2">
              More About me
              <BiArrowFromLeft size={"1.5rem"} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
