import React from "react"
import {
  SiExpress,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
} from "react-icons/si"
import SkillDetails from "./SkillDetails"

const styles = {
  icon: `rounded-lg hover:scale-150 hover:bg-white hover:text-black p-1 ease-in-out`,
}

const skillsData = [
  {
    img: "/img/p1.png",
    title: "Full Stack Development",
    caption:
      "Innovative and custom-built applications tailored to your specific needs.",
  },
  {
    img: "/img/p2.jpg",
    title: "UI / UX",
    caption: "Elevate your brand's digital presence with expert UI/UX design.",
  },
]

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 p-3 items-center lg:items-start">
      <div className="lg:w-2/3 mt-6 flex flex-col gap-12">
        <h1 className="font-title text-4xl pl-3">
          I'm Han Ye Htun. A software Engineer
        </h1>
        <div className="bg-black text-white text-xl font-title flex flex-col px-3 py-6 shadow-blue">
          Serving full-fat, extra sugar, deep-fried, amazing Ideas with great
          Technical Skills
          <div className="flex flex-row justify-center flex-wrap md:flex-nowrap gap-3 my-6 lg:mt-12">
            <SiTypescript size={"2.5rem"} className={styles.icon} />
            <SiNextdotjs size={"2.5rem"} className={styles.icon} />
            <SiReact size={"2.5rem"} className={styles.icon} />
            <SiRedux size={"2.5rem"} className={styles.icon} />
            <SiExpress size={"2.5rem"} className={styles.icon} />
            <SiNodedotjs size={"2.5rem"} className={styles.icon} />
            <SiMongodb size={"2.5rem"} className={styles.icon} />
            <SiMui size={"2.5rem"} className={styles.icon} />
            <SiTailwindcss size={"2.5rem"} className={styles.icon} />
          </div>
        </div>
        <div className="bg-white border-2 shadow-black px-3 py-6">
          <span className="font-title text-xs">// The Dev</span>
          <h1 className="font-title text-xl mb-6">
            Software Engineer with Expertise in UI/UX and Front-End Development
          </h1>
          <p className="text-sm font-bold">
            Got a shop to launch or a website to develop? Let's work together to
            create an awesome user experience! As a UI/UX expert and software
            engineer, I'll collaborate with you to understand your needs and
            bring your vision to life. Whether you're starting from scratch or
            need help with an existing site, I'm here to help you create
            something amazing.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-12 border-r-4 py-6 pb-12 max-w-[327px]">
        {skillsData.map((service) => (
          <SkillDetails
            key={service.title}
            img={service.img}
            title={service.title}
            caption={service.caption}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero
