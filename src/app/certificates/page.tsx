'use client';
import { useState } from "react";
import confetti from "canvas-confetti";
import { certificateList } from "@/datas/certificateList";

import dynamic from "next/dynamic";

const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), {
  ssr: false,
});

export default function Certificates() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleConfetti = () => {
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="w-full md:px-4 py-10 flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl">
        {certificateList.map((cert, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onMouseEnter={() => {
              setHoveredIndex(index);
              handleConfetti();
            }}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative rounded-xl p-4 sm:p-5 shadow-lg transition-all duration-300 overflow-hidden max-w-full 
                       bg-[color:var(--card-bg)] border border-[color:var(--secondary)] hover:border-[color:var(--primary)]"
          >
            {hoveredIndex === index && (
              <MotionDiv
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-2 right-3 text-2xl"
              >
                🎓
              </MotionDiv>
            )}

            <div className="mb-2">
              <span className="inline-block px-3 py-1 text-xs rounded-full 
                               bg-[color:var(--primary)] text-[color:var(--background)]">
                {cert.issuer}
              </span>
            </div>
            <h3 className="text-[color:var(--foreground)] font-semibold text-base sm:text-lg leading-snug">
              {cert.title}
            </h3>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}
