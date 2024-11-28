"use client";

import React from "react";
import {
  BiLinkExternal,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { IoMdArrowDropright } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { useState } from "react";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Projects = () => {
  const images = [
    "/string_vault_1.png",
    "/string_vault_2.png",
    "/string_vault_3.png",
    "/string_vault_4.png",
  ]; // Replace with actual image paths
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isFading, setIsFading] = useState(false);

  const changeImage = (newIndex: number) => {
    setIsFading(true); // Start fade-out effect
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsFading(false); // Start fade-in effect
    }, 300); // Match this to the Tailwind transition duration
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    changeImage(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage(newIndex);
  };
  return (
    <div className="space-y-5">
      <h3 className="text-3xl text-cyan-500 flex justify-center md:justify-start">
        Projects
      </h3>
      {/* <div>
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
      </div> */}
      <div>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-xl text-cyan-500">String Vault</h1>
          <div className="flex flex-row items-center space-x-1">
            <BiLogoTypescript className="text-xl" />
            <BiLogoReact className="text-xl" />
            <BiLogoTailwindCss className="text-xl" />
            <RiNextjsFill className="text-xl" />
            <IoLogoVercel className="text-xl" />
            <RiSupabaseFill className="text-xl" />
          </div>
        </div>
        {/* testing */}

        <div className="relative border-2 border-white rounded-lg mt-2 overflow-hidden">
          <div
            className={`relative transition-opacity duration-300 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          >
            <Image
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              layout="intrinsic"
              width={800} // Set an appropriate width for your images
              height={600} // Maintain the aspect ratio of your images
              className="rounded-lg"
            />
          </div>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            <IoIosArrowBack size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>

        {/* testing */}
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Blog style website where people can add photos of their guitar
          collection for everyone to see with light and dark mode.
        </p>
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Uses OAuth to sign up and Supabase for the database.
        </p>
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Users can track cost, sevice date, purchase date, and serial numbers.
        </p>
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
      </div>
    </div>
  );
};

export default Projects;
