import React from "react";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { PiFileCSharp } from "react-icons/pi";
import { BiLogoPython } from "react-icons/bi";
import { PiFileSql } from "react-icons/pi";

const Technologies = () => {
  return (
    <div className="space-y-5">
      <h3 className="text-3xl text-cyan-500 flex justify-center md:justify-start">
        Technologies
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        <div className="border-2 rounded-md px-2 py-2 flex gap-2 items-center justify-center w-full h-full hover:scale-105 hover:border-cyan-500 transition duration-200 ease-in-out">
          <BiLogoJavascript className="text-cyan-500 text-2xl" />
          <p className="text-sm select-none">JAVASCRIPT</p>
        </div>
        <div className="border-2 rounded-md px-2 py-2 flex gap-2 items-center justify-center w-full h-full hover:scale-105 hover:border-cyan-500 transition duration-200 ease-in-out">
          <BiLogoTypescript className="text-cyan-500 text-2xl" />
          <p className="text-sm select-none">TYPESCRIPT</p>
        </div>
        <div className="border-2 rounded-md px-2 py-2 flex gap-2 items-center justify-center w-full h-full hover:scale-105 hover:border-cyan-500 transition duration-200 ease-in-out">
          <BiLogoReact className="text-cyan-500 text-2xl" />
          <p className="text-sm select-none">REACT</p>
        </div>
        <div className="border-2 rounded-md px-2 py-2 flex gap-2 items-center justify-center w-full h-full hover:scale-105 hover:border-cyan-500 transition duration-200 ease-in-out">
          <BiLogoTailwindCss className="text-cyan-500 text-2xl" />
          <p className="text-sm select-none">TAILWIND</p>
        </div>
        <div className="border-2 rounded-md px-2 py-2 flex gap-2 items-center justify-center w-full h-full hover:scale-105 hover:border-cyan-500 transition duration-200 ease-in-out">
          <RiNextjsFill className="text-cyan-500 text-2xl" />
          <p className="text-sm select-none">NEXT.JS</p>
        </div>
        <div className="border-2 rounded-md px-2 py-2 flex gap-2 items-center justify-center w-full h-full hover:scale-105 hover:border-cyan-500 transition duration-200 ease-in-out">
          <IoLogoVercel className="text-cyan-500 text-2xl" />
          <p className="text-sm select-none">VERCEL</p>
        </div>
        <div className="border-2 rounded-md px-2 py-2 flex gap-2 items-center justify-center w-full h-full hover:scale-105 hover:border-cyan-500 transition duration-200 ease-in-out">
          <BiLogoMongodb className="text-cyan-500 text-2xl" />
          <p className="text-sm select-none">MONGODB</p>
        </div>
        <div className="border-2 rounded-md px-2 py-2 flex gap-2 items-center justify-center w-full h-full hover:scale-105 hover:border-cyan-500 transition duration-200 ease-in-out">
          <PiFileSql className="text-cyan-500 text-2xl" />
          <p className="text-sm select-none">SQL</p>
        </div>
        <div className="border-2 rounded-md px-2 py-2 flex gap-2 items-center justify-center w-full h-full hover:scale-105 hover:border-cyan-500 transition duration-200 ease-in-out">
          <PiFileCSharp className="text-cyan-500 text-2xl" />
          <p className="text-sm select-none">C#</p>
        </div>
        <div className="border-2 rounded-md px-2 py-2 flex gap-2 items-center justify-center w-full h-full hover:scale-105 hover:border-cyan-500 transition duration-200 ease-in-out">
          <BiLogoHtml5 className="text-cyan-500 text-2xl" />
          <p className="text-sm select-none">HTML</p>
        </div>
        <div className="border-2 rounded-md px-2 py-2 flex gap-2 items-center justify-center w-full h-full hover:scale-105 hover:border-cyan-500 transition duration-200 ease-in-out">
          <BiLogoCss3 className="text-cyan-500 text-2xl" />
          <p className="text-sm select-none">CSS</p>
        </div>
        <div className="border-2 rounded-md px-2 py-2 flex gap-2 items-center justify-center w-full h-full hover:scale-105 hover:border-cyan-500 transition duration-200 ease-in-out">
          <BiLogoPython className="text-cyan-500 text-2xl" />
          <p className="text-sm select-none">PYTHON</p>
        </div>
      </div>

      {/* <p className="">
        I have used <span className="text-cyan-500 font-semibold">GOOGLE</span>{" "}
        <span className="text-cyan-500">API&apos;s</span>,{" "}
        <span className="text-cyan-500">Workspace</span>, and{" "}
        <span className="text-cyan-500">Google Ads</span>.
      </p> */}
      <p>I am also proficient in Microsoft Word, Excel, and Powerpoint.</p>
      <p>
        I have also used technologies like Stripe, Pusher, Google API&apos;s,
        and Google Workspace.
      </p>
    </div>
  );
};

export default Technologies;
