"use client";
import Link from "next/link";
import { HomeIcon, CodeIcon, BrainIcon, UserIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange, false);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange, false);
    };
  }, []);

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 flex space-x-8 bg-gray-200/70 dark:bg-gray-800/70 p-6 rounded-full shadow-md backdrop-blur-md md:scale-125">
      <Link href="#home" aria-label="Home">
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-full transition-all ${
            activeSection === "#home"
              ? "bg-blue-500 text-white"
              : "text-gray-600 dark:text-gray-300"
          } hover:shadow-lg hover:-translate-y-1`}
        >
          <HomeIcon className="w-6 h-6" />
        </div>
      </Link>
      <Link href="#projects" aria-label="Projetos">
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-full transition-all ${
            activeSection === "#projects"
              ? "bg-blue-500 text-white"
              : "text-gray-600 dark:text-gray-300"
          } hover:shadow-lg hover:-translate-y-1`}
        >
          <CodeIcon className="w-6 h-6" />
        </div>
      </Link>
      <Link href="#ai" aria-label="IA e Integrações">
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-full transition-all ${
            activeSection === "#ai"
              ? "bg-blue-500 text-white"
              : "text-gray-600 dark:text-gray-300"
          } hover:shadow-lg hover:-translate-y-1`}
        >
          <BrainIcon className="w-6 h-6" />
        </div>
      </Link>
      <Link href="#about" aria-label="Sobre Mim">
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-full transition-all ${
            activeSection === "#about"
              ? "bg-blue-500 text-white"
              : "text-gray-600 dark:text-gray-300"
          } hover:shadow-lg hover:-translate-y-1`}
        >
          <UserIcon className="w-6 h-6" />
        </div>
      </Link>
    </nav>
  );
}
