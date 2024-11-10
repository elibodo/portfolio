import React from "react";
import {
  BiLinkExternal,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { IoMdArrowDropright } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";

const Projects = () => {
  return (
    <div className="space-y-5">
      <h3 className="text-3xl text-cyan-500 flex justify-center md:justify-start">
        Projects
      </h3>
      <div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-xl text-cyan-500">Win Loss Poker</h1>
          <div className="flex flex-row items-center space-x-1">
            <BiLogoJavascript className="text-xl" />
            <BiLogoReact className="text-xl" />
            <BiLogoTailwindCss className="text-xl" />
            <RiNextjsFill className="text-xl" />
            <IoLogoVercel className="text-xl" />
            <BiLogoMongodb className="text-xl" />
          </div>
        </div>
        <div className="border-2 border-white rounded-lg mt-2 h-48"></div>
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          This app uses NextAuth for secure sign-ups, enabling users to create
          accounts where they can log their poker stats. Once registered, users
          can track their performance and view detailed graphs to analyze their
          data over time.
        </p>
        {/* NEED REAL LINK */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.google.com/"}
          className="flex items-center mt-2"
        >
          <span className="mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          View Live Demo
          <span className="ml-1 text-cyan-500">
            {" "}
            <BiLinkExternal />
          </span>
        </a>
      </div>
      <div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-xl text-cyan-500">String Vault</h1>
          <div className="flex flex-row items-center space-x-1">
            <BiLogoTypescript className="text-xl" />
            <BiLogoReact className="text-xl" />
            <BiLogoTailwindCss className="text-xl" />
            <RiNextjsFill className="text-xl" />
            <IoLogoVercel className="text-xl" />
            <BiLogoMongodb className="text-xl" />
          </div>
        </div>
        <div className="border-2 border-white rounded-lg mt-2 h-48"></div>
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          This app uses NextAuth for secure sign-ups, allowing users to create
          personal accounts where they can upload photos of their guitars, track
          serial numbers, and manage their entire collection. Users can also
          explore and view photos of other users&apos; guitars, providing
          community experience while keeping detailed records of their
          instruments.
        </p>
        {/* NEED REAL LINK */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.google.com/"}
          className="flex items-center mt-2"
        >
          <span className="mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          View Live Demo
          <span className="ml-1 text-cyan-500">
            {" "}
            <BiLinkExternal />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Projects;
