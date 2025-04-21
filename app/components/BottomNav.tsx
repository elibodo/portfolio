import React from "react";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";

const BottomNav = () => {
  return (
    <footer className="mt-auto flex w-full justify-center pb-6 pt-[14px]">
      <div className="flex-row flex gap-6 text-2xl">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={"https://github.com/elibodo"}
          className="text-white hover:text-cyan-500 hover:scale-125 transition duration-200 ease-in-out"
        >
          <BiLogoGithub />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.linkedin.com/in/eli-bodovinitz"}
          className="text-white hover:text-cyan-500 hover:scale-125 transition duration-200 ease-in-out"
        >
          <BiLogoLinkedinSquare />
        </a>
        <a
          href={"mailto:ebodovinitz@gmail.com"}
          className="text-white hover:text-cyan-500 hover:scale-125 transition duration-200 ease-in-out"
        >
          <MdAlternateEmail />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={"Resume.pdf"}
          className="text-white hover:text-cyan-500 hover:scale-125 transition duration-200 ease-in-out"
        >
          <BiLinkExternal />
        </a>
      </div>
    </footer>
  );
};

export default BottomNav;
