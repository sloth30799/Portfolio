import React from "react";
import {
  SiExpress,
  SiMongodb,
  SiDotnet,
  SiNextdotjs,
  SiVuedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
} from "react-icons/si";
import SkillDetails from "./SkillDetails";
import p1 from "@/assets/img/p1.jpeg";
import p2 from "@/assets/img/p2.jpeg";

const styles = {
  icon: `rounded-lg hover:scale-150 hover:bg-white hover:text-black p-1 ease-in-out`,
};

const skillsData = [
  {
    img: p1,
    title: "Frontend Development",
    caption: "Craft user interfaces and experiences that engage your audience.",
  },
  {
    img: p2,
    title: "Backend Development",
    caption: "Build robust server-side solutions to power your applications.",
  },
];

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-between px-3 m-auto xl:container lg:flex-row lg:items-start">
      <div className="flex flex-col gap-6 pr-3 mb-3 lg:w-2/3">
        <h1 className="pl-3 text-4xl font-title">
          I'm Han Ye Htun. A software Engineer
        </h1>
        <div className="flex flex-col px-3 py-6 text-xl text-white bg-black font-title shadow-blue">
          Serving full-fat, extra sugar, deep-fried, amazing Ideas with great
          Technical Skills
          <div className="flex flex-row flex-wrap justify-center gap-3 my-6 md:flex-nowrap lg:mt-12">
            <SiReact size={"2.5rem"} className={styles.icon} />
            <SiNextdotjs size={"2.5rem"} className={styles.icon} />
            <SiVuedotjs size={"2.5rem"} className={styles.icon} />
            <SiTailwindcss size={"2.5rem"} className={styles.icon} />
            <SiRedux size={"2.5rem"} className={styles.icon} />
            <SiExpress size={"2.5rem"} className={styles.icon} />
            <SiDotnet size={"2.5rem"} className={styles.icon} />
            <SiMongodb size={"2.5rem"} className={styles.icon} />
            <SiTypescript size={"2.5rem"} className={styles.icon} />
          </div>
        </div>
        <div className="px-3 py-6 bg-white border-2 shadow-black">
          <span className="text-xs font-title">// The Dev</span>
          <h1 className="mb-6 text-xl font-title">
            Software Engineer with Expertise in Front-End Development
          </h1>
          <p className="text-sm font-bold">
            Got a shop to launch or a website to develop? Let's work together to
            create an awesome user experience! As a skilled software engineer,
            I'll collaborate with you to understand your needs and bring your
            vision to life. Whether you're starting from scratch or need help
            with an existing site, I'm here to help you create something
            amazing.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-col gap-12 my-6 mb-9">
        {skillsData.map((service) => (
          <SkillDetails
            key={service.title}
            img={service.img}
            title={service.title}
            caption={service.caption}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
