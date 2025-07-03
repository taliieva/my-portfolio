"use client";
import { useState } from "react";
import { experiences } from "@/datas/experience";

import dynamic from "next/dynamic";

const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), {
  ssr: false,
});
export default function Experiences() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full mt-10 flex flex-col md:flex-row gap-10">
      <div className="flex flex-col items-start relative pl-6 ">
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-600 z-[-1]" />
        {experiences.map((exp, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex items-center gap-3 mb-6 transition-all duration-300 ${
              activeIndex === index
                ? "text-blue-500 font-bold"
                : "text-gray-400"
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full border-2 ${
                activeIndex === index
                  ? "bg-blue-500 border-blue-500"
                  : "border-gray-500"
              }`}
            ></div>
            <span className="text-md">{exp.company}</span>
          </button>
        ))}
      </div>

      <MotionDiv
        key={activeIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-6 rounded-lg shadow-md max-w-2xl w-full"
      >
        <h3 className="text-xl font-bold text-white">
          {experiences[activeIndex].company}
        </h3>
        <p className="text-blue-400 text-sm">{experiences[activeIndex].role}</p>
        <p className="text-gray-400 text-sm mb-3">
          {experiences[activeIndex].date}
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          {experiences[activeIndex].responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </MotionDiv>
    </div>
  );
}
