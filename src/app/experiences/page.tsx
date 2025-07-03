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
      <div className="flex flex-col items-start relative pl-6">
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-[color:var(--secondary)] z-[-1]" />
        {experiences.map((exp, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex items-center gap-3 mb-6 transition-all duration-300 ${
              activeIndex === index
                ? "text-[color:var(--primary)] font-bold"
                : "text-[color:var(--foreground)] opacity-60"
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full border-2 ${
                activeIndex === index
                  ? "bg-[color:var(--primary)] border-[color:var(--primary)]"
                  : "border-[color:var(--secondary)]"
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
        className="bg-[color:var(--card-bg)] p-6 rounded-lg shadow-md max-w-2xl w-full"
      >
        <h3 className="text-xl font-bold text-[color:var(--foreground)]">
          {experiences[activeIndex].company}
        </h3>
        <p className="text-[color:var(--primary)] text-sm">{experiences[activeIndex].role}</p>
        <p className="text-[color:var(--foreground)] text-sm opacity-70 mb-3">
          {experiences[activeIndex].date}
        </p>
        <ul className="list-disc list-inside text-[color:var(--foreground)] opacity-90 space-y-1">
          {experiences[activeIndex].responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </MotionDiv>
    </div>
  );
}
