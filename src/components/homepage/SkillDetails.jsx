import React from "react";

const Service = ({ img, title, caption }) => {
  return (
    <article className="relative bg-skillCard shadow-lg px-4 pt-6 w-[260px] h-[400px] border-b bg-no-repeat bg-cover">
      <div className="font-body">
        <p className="text-xs">///</p>
        <p className="overflow-hidden text-sm leading-none font-body w-36">
          {caption}
        </p>
      </div>

      <img
        src={img}
        alt="Card Image"
        className="rounded-lg w-[180px] h-[75%] grayscale hover:grayscale-[0.5] absolute -bottom-4"
      />

      <div className="translate-x-[44%] translate-y-[70px] font-title transform rotate-90 text-xl leading-10 whitespace-nowrap">
        {"<>"}
        {title}
      </div>
    </article>
  );
};

export default Service;
