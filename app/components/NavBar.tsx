"use client";

import React, { useState, useEffect } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          } else if (
            !entry.isIntersecting &&
            activeSection === entry.target.id
          ) {
            setActiveSection("");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.7, // %70
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [activeSection]);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-sm shadow-lg bg-opacity-60 text-lg p-4 mb-6 pr-14 flex justify-end items-center gap-8 z-10">
      <a
        href="#technologies"
        className={`relative group py-1 ${
          activeSection === "technologies" ? "border-cyan-500" : ""
        }`}
      >
        <span
          className={`absolute right-0 top-0 w-0 h-[3px] bg-cyan-500 transition-all duration-300 ease-in-out group-hover:w-full ${
            activeSection === "technologies" ? "w-full" : "w-0"
          }`}
        ></span>
        Technologies
        <span
          className={`absolute left-0 bottom-0 w-0 h-[3px] bg-cyan-500 transition-all duration-300 ease-in-out group-hover:w-full ${
            activeSection === "technologies" ? "w-full" : "w-0"
          }`}
        ></span>
      </a>
      <a
        href="#workexperience"
        className={`relative group py-1 ${
          activeSection === "workexperience" ? "border-cyan-500" : ""
        }`}
      >
        <span
          className={`absolute right-0 top-0 w-0 h-[3px] bg-cyan-500 transition-all duration-300 ease-in-out group-hover:w-full ${
            activeSection === "workexperience" ? "w-full" : "w-0"
          }`}
        ></span>
        Work Experience
        <span
          className={`absolute left-0 bottom-0 w-0 h-[3px] bg-cyan-500 transition-all duration-300 ease-in-out group-hover:w-full ${
            activeSection === "workexperience" ? "w-full" : "w-0"
          }`}
        ></span>
      </a>
      <a
        href="#projects"
        className={`relative group py-1 ${
          activeSection === "projects" ? "border-cyan-500" : ""
        }`}
      >
        <span
          className={`absolute right-0 top-0 w-0 h-[3px] bg-cyan-500 transition-all duration-300 ease-in-out group-hover:w-full ${
            activeSection === "projects" ? "w-full" : "w-0"
          }`}
        ></span>
        Projects
        <span
          className={`absolute left-0 bottom-0 w-0 h-[3px] bg-cyan-500 transition-all duration-300 ease-in-out group-hover:w-full ${
            activeSection === "projects" ? "w-full" : "w-0"
          }`}
        ></span>
      </a>
      <a
        href="#education"
        className={`relative group py-1 ${
          activeSection === "education" ? "border-cyan-500" : ""
        }`}
      >
        <span
          className={`absolute right-0 top-0 w-0 h-[3px] bg-cyan-500 transition-all duration-300 ease-in-out group-hover:w-full ${
            activeSection === "education" ? "w-full" : "w-0"
          }`}
        ></span>
        Education
        <span
          className={`absolute left-0 bottom-0 w-0 h-[3px] bg-cyan-500 transition-all duration-300 ease-in-out group-hover:w-full ${
            activeSection === "education" ? "w-full" : "w-0"
          }`}
        ></span>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={"EliBodovinitz.pdf"}
        className="relative group flex items-center py-1"
      >
        <span
          className={`absolute right-0 top-0 w-0 h-[3px] bg-cyan-500 transition-all duration-300 ease-in-out group-hover:w-full ${
            activeSection === "resume" ? "w-full" : "w-0"
          }`}
        ></span>
        Resume
        <span className="ml-2">
          <BiLinkExternal />
        </span>
        <span
          className={`absolute left-0 bottom-0 w-0 h-[3px] bg-cyan-500 transition-all duration-300 ease-in-out group-hover:w-full ${
            activeSection === "resume" ? "w-full" : "w-0"
          }`}
        ></span>
      </a>
    </nav>
  );
};

export default NavBar;
