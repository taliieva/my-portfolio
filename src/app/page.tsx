"use client";
import AboutMe from "@/components/AboutMe";
import ContactInfo from "@/components/ContactInfo";
import Skills from "@/components/Skills";
import { useState } from "react";
import Experiences from "./experiences/page";
import Education from "./education/page";
import Certificates from "./certificates/page";

export default function Home() {
  const [activeTab, setActiveTab] = useState<
    | "about"
    | "skills"
    | "education"
    | "experiences"
    | "certificates"
  >("about");
  const tabs = [
    "about",
    "skills",
    "education",
    "experiences",
    "certificates",
  ];
  return (
    <div className="w-full px-[30px] py-[20px] flex flex-col items-center">
      <ContactInfo />

      <div className="flex w-full gap-6 border-b border-gray-700 mt-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`capitalize pb-2 text-[14px] md:text-[18px] font-semibold transition-all duration-300 ${
              activeTab === tab
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab === "about"
              ? "About Me"
              : tab === "skills"
              ? "Skills"
              : tab === "education"
              ? "education"
              : tab === "experiences"
              ? "experiences"
              : "certificates"}
          </button>
        ))}
      </div>

      <div className="mt-8 w-full">
        {activeTab === "about" && <AboutMe />}
        {activeTab === "skills" && <Skills />}
        {/* {activeTab === "projects" && <Projects />} */}
        {activeTab === "education" && <Education />}
        {activeTab === "experiences" && <Experiences />}
        {activeTab === "certificates" && <Certificates />}
      </div>
    </div>
  );
}
