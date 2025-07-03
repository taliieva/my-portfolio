import { motion } from "framer-motion";
import { useState } from "react";
import confetti from "canvas-confetti";
import { certificateList } from "@/datas/certificateList";

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
    <div className="w-full px-4 py-10 flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl">
        {certificateList.map((cert, index) => (
          <motion.div
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
            className="relative bg-gray-800 rounded-xl p-4 sm:p-5 shadow-lg transition-all duration-300 border border-gray-700 hover:border-blue-500 overflow-hidden max-w-full"
          >
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-2 right-3 text-2xl"
              >
                🎓
              </motion.div>
            )}

            <div className="mb-2">
              <span className="inline-block px-3 py-1 text-xs bg-blue-600 text-white rounded-full">
                {cert.issuer}
              </span>
            </div>
            <h3 className="text-white font-semibold text-base sm:text-lg leading-snug">
              {cert.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
