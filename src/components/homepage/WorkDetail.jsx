import React from "react"
import { BsGithub } from "react-icons/bs"
import { BiLinkExternal } from "react-icons/bi"
import { motion } from "framer-motion"

const WorkDetail = ({ link, glink, img, title, caption, badge }) => {
  return (
    <div className="grid grid-rows-5 gap-6 pt-5 pb-12 border-0 border-b border-solid lg:grid-rows-1 lg:grid-cols-5 ">
      <motion.div
        className={`workImg md:col-span-2 row-span-2 md:row-span-3 lg:h-48`}
        whileHover={{
          backgroundPositionY: "100%",
          transition: { duration: 5 },
        }}
        style={{ backgroundImage: `url(${img})` }}
      ></motion.div>
      <div>
        <h1 className="mb-1 text-lg font-title">{title}</h1>
        <div className="badge badge-secondary">{badge}</div>
      </div>
      <div className="flex flex-col row-span-2 gap-4 text-sm font-semibold md:row-span-1 md:col-span-2 text-grey">
        {caption}
        <div className="flex gap-3">
          {glink ? (
            <a href={glink}>
              <button className="gap-2 btn btn-sm btn-outline btn-secondary hover:shadow-btn">
                <BsGithub />
                Code
              </button>
            </a>
          ) : null}
          <a href={link}>
            <button className="gap-2 btn btn-sm btn-outline btn-secondary hover:shadow-btn">
              <BiLinkExternal />
              Live
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default WorkDetail
