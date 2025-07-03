"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const softSkills = [
    "Problem solving",
    "Team playing",
    "Analytical thinking",
    "Detail oriented",
    "Time and estimation management",
  ];

  const hardSkills = [
    "HTML",
    "CSS",
    "Javascript",
    "TypeScript",
    "React JS",
    "Next.js",
    "Tailwind CSS",
    "GitLab/GitHub",
    "Redux",
    "Jest",
    "Chakra UI",
    "Material UI",
    "Bootstrap",
  ];

  return (
    <div className="flex max-w-[800px] justify-between p-[30px] flex-col md:flex-row gap-8">
      <div className="flex flex-col gap-2">
        <p className="font-black text-[25px] mb-[10px]">Soft Skills</p>
        <motion.ul
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="list-disc space-y-1"
        >
          {softSkills.map((skill) => (
            <li
              key={skill}
              className="inline-block bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 transition hover:bg-blue-700 hover:shadow-lg cursor-default"
            >
              {skill}
            </li>
          ))}
        </motion.ul>
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-black text-[25px] mb-[10px]">Tech & Tools</p>
        <motion.ul
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="list-disc space-y-1"
        >
          {hardSkills.map((skill) => (
            <li key={skill} className="inline-block bg-blue-600 text-white rounded-full px-5 py-1 text-sm font-semibold mr-2 mb-2 transition hover:bg-blue-700 hover:shadow-lg cursor-default">
              {skill}
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
