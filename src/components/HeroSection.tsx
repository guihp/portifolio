"use client";

import { GithubIcon, LinkedinIcon, MailIcon, MessageSquareIcon } from "lucide-react";
import Link from "next/link";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";


export default function HeroSection() {
  return (
    <section id="home" className="flex flex-col items-center justify-center h-screen text-center px-4 bg-white dark:bg-gray-900">
      {/* Botão Dark/Light Mode */}
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>

      {/* Nome e Cargo */}
      <h1 className="text-4xl sm:text-6xl font-bold text-blue-500 dark:text-blue-400">
        Guilherme <span className="text-purple-500 dark:text-purple-400">Barros</span>
      </h1>
      <p className="mt-2 sm:mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
        Front-End Developer & AI Engineer
      </p>

      {/* Ícones de Redes Sociais */}
      <div className="flex space-x-6 mt-6">
        <Link href="https://github.com" target="_blank" aria-label="GitHub">
          <GithubIcon className="w-8 h-8 text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-transform hover:scale-110" />
        </Link>
        <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <LinkedinIcon className="w-8 h-8 text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-transform hover:scale-110" />
        </Link>
        <Link href="https://wa.me/5598984858134" target="_blank" aria-label="WhatsApp">
            <MessageSquareIcon className="w-8 h-8 text-gray-600 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-400 transition-transform hover:scale-110" />
        </Link>
        <Link href="mailto:g.henrique.barros21@gmail.com" aria-label="E-mail">
          <MailIcon className="w-8 h-8 text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-transform hover:scale-110" />
        </Link>
      </div>
    </section>
  );
}
