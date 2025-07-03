"use client";
import { educationList } from "@/datas/educationList";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), {
  ssr: false,
});

export default function Education() {
  return (
    <div className="w-full flex flex-col items-start mt-10 px-4">
      <div className="relative border-l-2 border-[color:var(--secondary)] ml-4">
        {educationList.map((edu, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-10 ml-6 relative"
          >
            <div className="absolute -left-5 top-2 w-4 h-4 bg-[color:var(--primary)] border-2 border-white rounded-full"></div>
            <div className="bg-[color:var(--card-bg)] p-6 rounded-lg shadow-md max-w-xl w-full">
              <h3 className="text-xl font-bold text-[color:var(--foreground)]">
                {edu.institution}
              </h3>
              <p className="text-[color:var(--primary)] text-sm">{edu.degree}</p>
              <p className="text-[color:var(--foreground)] text-sm opacity-70 mb-3">{edu.date}</p>
              <ul className="list-disc list-inside text-[color:var(--foreground)] opacity-90 space-y-1">
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
