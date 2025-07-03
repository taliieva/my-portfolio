"use client";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full flex justify-between px-[30px] py-[10px] items-center"
         style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      <p className="font-black text-[25px]">Tarana Aliyeva</p>
      <div className="flex items-center gap-6">
        <button
          onClick={toggleTheme}
          style={{ color: "var(--foreground)" }}
          className="hover:text-[color:var(--primary)] transition"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </div>
  );
}
