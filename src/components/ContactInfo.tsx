"use client";
import { Calendar1, Github, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";

import dynamic from "next/dynamic";
import Link from "next/link";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  {
    ssr: false,
  }
);
export default function ContactInfo() {
  const aboutInfo = [
    {
      icon: <Mail size={20} color="var(--foreground)" />,
      label: "Email",
      value: "teranealieva01@gmail.com",
      href: "mailto:teranealieva01@gmail.com",
    },
    {
      icon: <Phone size={20} color="var(--foreground)" />,
      label: "Phone",
      value: "+994 50 755 01 30",
      href: "tel:+994507550130",
    },
    {
      icon: <Calendar1 size={20} color="var(--foreground)" />,
      label: "Birthday",
      value: "1 December 2001",
      href: '', 
    },
    {
      icon: <Linkedin size={20} color="var(--foreground)" />,
      label: "Linkedin",
      value: "linkedin.com/in/tarana-aliyeva",
      href: "https://linkedin.com/in/tarana-aliyeva",
    },
    {
      icon: <Github size={20} color="var(--foreground)" />,
      label: "Github",
      value: "github.com/taliieva",
      href: "https://github.com/taliieva",
    },
  ];

  return (
    <div className="w-full md:p-6 flex flex-col md:flex-row gap-8 md:items-start">
      <Image
        src="/cvPhoto.jpg"
        alt=""
        width={200}
        height={200}
        className="rounded-2xl object-cover"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        {aboutInfo.map((info) => (
          <MotionDiv
            key={info.label}
            whileHover={{ scale: 1.05, color: "#3b82f6", cursor: "pointer" }}
          >
            <div className="flex flex-row items-center gap-2 mb-1">
              {info.icon}
              <span className="text-[color:var(--foreground)] text-sm font-semibold">
                {info.label}
              </span>
            </div>
            <Link href={info.href} className="text-[color:var(--foreground)] text-[12px] md:text-sm break-words">
              {info.value}
            </Link>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}
