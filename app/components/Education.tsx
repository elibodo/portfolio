import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const Education = () => {
  return (
    <div className="space-y-5">
      <h3 className="text-3xl text-cyan-500 flex justify-center md:justify-start">
        Education
      </h3>
      <div>
        <h1 className="text-xl text-cyan-500">
          AS, Computer Programming and Analysis
        </h1>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <h2 className="text-lg">Hillsborough Community College</h2>
          <h3 className="text-sm">Tampa, Florida</h3>
        </div>

        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          3.714 GPA | Honors | Dean&apos;s List
        </p>
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Developed applications using C#, Visual Basic, C, Java, and Python.
        </p>
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Gained experience in software development, database management, and
          application design.
        </p>
        {/* <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Applied object-oriented programming (OOP) principles to real-world
          projects.
        </p> */}
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Learned debugging, troubleshooting, problem-solving, and analytical
          skills.
        </p>
      </div>
      <div>
        <h1 className="text-xl text-cyan-500">
          CCC, Computer Programming Specialist
        </h1>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <h2 className="text-lg">Hillsborough Community College</h2>
          <h3 className="text-sm">Tampa, Florida</h3>
        </div>
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Concentrated on the .NET framework, developing projects primarily in
          C# and Visual Basic.
        </p>
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Worked with databases, algorithms, and data structures to build
          efficient application.
        </p>
      </div>
    </div>
  );
};

export default Education;
