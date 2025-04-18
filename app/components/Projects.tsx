"use client";

import React from "react";
import {
  BiLinkExternal,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoMongodb,
} from "react-icons/bi";
import { IoMdArrowDropright } from "react-icons/io";
import { RiNextjsFill, RiSupabaseFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { SiDotnet } from "react-icons/si";
import { PiFileCSharp } from "react-icons/pi";
import { DiMsqlServer } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { SiExpress } from "react-icons/si";

const Projects = () => {
  return (
    <div className="space-y-5">
      <h3 className="text-3xl text-cyan-500 flex justify-center md:justify-start">
        Projects
      </h3>
      {/* String Vault */}
      <div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-xl text-cyan-500">String Vault</h1>
          <div className="flex flex-row items-center space-x-1">
            <BiLogoTypescript className="text-xl" />
            <BiLogoReact className="text-xl" />

            <RiNextjsFill className="text-xl" />
            <BiLogoTailwindCss className="text-xl" />

            <RiSupabaseFill className="text-xl" />
            <IoLogoVercel className="text-xl" />
          </div>
        </div>
        <p className="flex items-start mt-2 italic text-sm">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          TypeScript, React.js, Next.js, Tailwind CSS, Supabase, Vercel, OAuth
        </p>
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          A web application for guitar enthusiasts to catalog their guitar
          collection, track serial numbers, cost, maintenance, and share photos
          of their instruments.
        </p>
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Developed a responsive and user-friendly UI for collection management
          and viewing.
        </p>
        {/* <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          The site uses OAuth to sign up and Supabase for the database.
        </p> */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={"https://stringvault.vercel.app/"}
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
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={"https://github.com/elibodo/string_vault"}
          className="flex items-center mt-2"
        >
          <span className="mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          GitHub Link
          <span className="ml-1 text-cyan-500">
            {" "}
            <BiLinkExternal />
          </span>
        </a>
      </div>
      {/* Poker Stats */}
      <div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-xl text-cyan-500">Poker Stats</h1>
          <div className="flex flex-row items-center space-x-1">
            <BiLogoJavascript className="text-xl" />
            <BiLogoReact className="text-xl" />
            <SiDotnet className="text-xl" />
            <PiFileCSharp className="text-xl" />
            <DiMsqlServer className="text-xl" />
            <VscAzure className="text-xl" />
          </div>
        </div>
        <p className="flex items-start mt-2 italic text-sm">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          JavaScript, React.js, .NET Core, C#, Microsoft SQL Server, Azure,
          HTML5, CSS3
        </p>
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          An application I made to track my poker statistics and analyze my
          wins/losses over time and view them on a graph.
        </p>
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Database is hosted on Azure and has CRUD functionality.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={"https://github.com/elibodo/pokerStats"}
          className="flex items-center mt-2"
        >
          <span className="mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          GitHub Link
          <span className="ml-1 text-cyan-500">
            {" "}
            <BiLinkExternal />
          </span>
        </a>
      </div>
      {/* Emordnilap */}
      <div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-xl text-cyan-500">Emordnilap</h1>
          <div className="flex flex-row items-center space-x-1">
            <BiLogoJavascript className="text-xl" />
            <BiLogoReact className="text-xl" />
            <BiLogoNodejs className="text-xl" />
            <SiExpress className="text-xl" />
            <BiLogoMongodb className="text-xl" />
          </div>
        </div>
        <p className="flex items-start mt-2 italic text-sm">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          JavaScript, React.js, Node.js, Express.js, MongoDB, HTML5, CSS3
        </p>
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          A web application to verify, save, and view emordnilaps and
          palindromes and their definitions.
        </p>
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Uses a dictionary API to verify if a word is valid and uses a MongoDB
          database to store the words and definitions.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={"https://github.com/elibodo/emordnilap"}
          className="flex items-center mt-2"
        >
          <span className="mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          GitHub Link
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
