"use client";
import { educationList } from "@/datas/educationList";

import dynamic from "next/dynamic";

const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), {
  ssr: false,
});

export default function Education() {
  return (
    <div className="w-full flex flex-col items-start mt-10 px-4">
      <div className="relative border-l-2 border-gray-600 ml-4">
        {educationList.map((edu, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-10 ml-6 relative"
          >
            <div className="absolute -left-5 top-2 w-4 h-4 bg-blue-500 border-2 border-white rounded-full"></div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md max-w-xl w-full">
              <h3 className="text-xl font-bold text-white">
                {edu.institution}
              </h3>
              <p className="text-blue-400 text-sm">{edu.degree}</p>
              <p className="text-gray-400 text-sm mb-3">{edu.date}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {edu.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}
