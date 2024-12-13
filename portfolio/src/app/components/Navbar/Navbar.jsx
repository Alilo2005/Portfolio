"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <header className="bg-gray-900 p-4">
      <div className="container mx-auto flex items-center justify-between rounded-full bg-white shadow-lg px-6 py-3">
        {/* Left Section (Navigation Links) */}
        <div className="flex items-center space-x-6">
          <a
            href="#home"
            className={`px-4 py-2 rounded-full font-medium transition delay-150 ${
              active === "home" ? "bg-blue-600 text-white" : "text-black hover:text-blue-600"
            }`}
            onClick={() => setActive("home")}
          >
            Home
          </a>
          <a
            href="#about"
            className={`px-4 py-2 rounded-full font-medium transition delay-150 ${
              active === "about" ? "bg-blue-600 text-white" : "text-black hover:text-blue-600"
            }`}
            onClick={() => setActive("about")}
          >
            About
          </a>
          <a
            href="#services"
            className={`px-4 py-2 rounded-full font-medium transition delay-150 ${
              active === "services" ? "bg-blue-600 text-white" : "text-black hover:text-blue-600"
            }`}
            onClick={() => setActive("services")}
          >
            Services
          </a>
        </div>
        {/* Center Section (Logo) */}
        <div className="flex justify-center items-center mx-auto">
  <Image src="/logo.svg" alt="Logo" width={175} height={75} />
</div>
        {/* Right Section (Navigation Links) */}
        <div className="flex items-center space-x-6 ml-auto">
          <a
            href="#resume"
            className={`px-4 py-2 rounded-full font-medium transition delay-150 ${
              active === "resume" ? "bg-blue-600 text-white" : "text-black hover:text-blue-600"
            }`}
            onClick={() => setActive("resume")}
          >
            Resume
          </a>
          <a
            href="#projects"
            className={`px-4 py-2 rounded-full font-medium transition delay-150 ${
              active === "projects" ? "bg-blue-600 text-white" : "text-black hover:text-blue-600"
            }`}
            onClick={() => setActive("projects")}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`px-4 py-2 rounded-full font-medium transition delay-150 ${
              active === "contact" ? "bg-blue-600 text-white" : "text-black hover:text-blue-600"
            }`}
            onClick={() => setActive("contact")}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}