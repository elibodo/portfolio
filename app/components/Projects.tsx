"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  BiLinkExternal,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  IoMdArrowDropright,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { RiNextjsFill, RiSupabaseFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";

const Projects = () => {
  const images = [
    "/string_vault_1.png",
    "/string_vault_2.png",
    "/string_vault_3.png",
    "/string_vault_4.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const changeImage = (newIndex: number) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsFading(false);
    }, 700);
    setTimeout(() => {}, 1000);
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
        <div className="relative border-2 border-white rounded-lg mt-2 overflow-hidden">
          <div
            className={`relative transition-opacity duration-300 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          >
            <Image
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              width={800}
              height={600}
              className={`rounded-lg transition-transform duration-1000`}
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
          Users can track cost, service date, purchase date, and serial numbers.
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
    </div>
  );
};

export default Projects;
