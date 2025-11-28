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
import { SiDotnet, SiExpress } from "react-icons/si";
import { PiFileCSharp } from "react-icons/pi";
import { DiMsqlServer } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";

const Projects = () => {
  const projects = [
    {
      title: "String Vault",
      techIcons: [
        BiLogoTypescript,
        BiLogoReact,
        RiNextjsFill,
        BiLogoTailwindCss,
        RiSupabaseFill,
        IoLogoVercel,
      ],
      techString:
        "TypeScript, React.js, Next.js, Tailwind CSS, Supabase, Vercel, OAuth",
      bullets: [
        "A web application for guitar enthusiasts to catalog their guitar collection, track serial numbers, cost, maintenance, and share photos of their instruments.",
      ],
      links: [
        { text: "View Live Demo", url: "https://stringvault.vercel.app/" },
        { text: "GitHub Link", url: "https://github.com/elibodo/string_vault" },
      ],
    },
    {
      title: "Poker Stats",
      techIcons: [
        BiLogoJavascript,
        BiLogoReact,
        SiDotnet,
        PiFileCSharp,
        DiMsqlServer,
        VscAzure,
      ],
      techString:
        "JavaScript, React.js, .NET Core, C#, Microsoft SQL Server, Azure, HTML5, CSS3",
      bullets: [
        "Developed an application to track and analyze poker statistics over time, with interactive graphs and CRUD functionality on an Azure-hosted database.",
      ],
      links: [
        { text: "GitHub Link", url: "https://github.com/elibodo/pokerStats" },
      ],
    },
    {
      title: "Emordnilap",
      techIcons: [
        BiLogoJavascript,
        BiLogoReact,
        BiLogoNodejs,
        SiExpress,
        BiLogoMongodb,
      ],
      techString:
        "JavaScript, React.js, Node.js, Express.js, MongoDB, HTML5, CSS3",
      bullets: [
        "Developed a web application to verify, store, and display emordnilaps and palindromes with definitions, using a dictionary API for validation and MongoDB for persistent storage.",
      ],
      links: [
        { text: "GitHub Link", url: "https://github.com/elibodo/emordnilap" },
      ],
    },
  ];

  return (
    <div className="space-y-5">
      <h3 className="text-3xl text-cyan-500 flex justify-center md:justify-start">
        Projects
      </h3>

      {projects.map((project, idx) => (
        <div key={idx}>
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-xl text-cyan-500">{project.title}</h1>

            <div className="flex flex-row items-center space-x-1">
              {project.techIcons.map((Icon, i) => (
                <Icon key={i} className="text-xl" />
              ))}
            </div>
          </div>

          <p className="flex items-start mt-2 italic text-sm">
            <span className="mt-1 mx-2 text-lg text-cyan-500">
              <IoMdArrowDropright />
            </span>
            {project.techString}
          </p>

          {project.bullets.map((item, i) => (
            <p key={i} className="flex items-start mt-2">
              <span className="mt-1 mx-2 text-lg text-cyan-500">
                <IoMdArrowDropright />
              </span>
              {item}
            </p>
          ))}

          {project.links.map((link, i) => (
            <a
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              href={link.url}
              className="flex items-center mt-2"
            >
              <span className="mx-2 text-lg text-cyan-500">
                <IoMdArrowDropright />
              </span>
              {link.text}
              <span className="ml-1 text-cyan-500">
                <BiLinkExternal />
              </span>
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Projects;
