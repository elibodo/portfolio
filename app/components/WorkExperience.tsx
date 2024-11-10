import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const WorkExperience = () => {
  return (
    <div className="space-y-5">
      <h3 className="text-3xl text-cyan-500 flex justify-center md:justify-start">
        Work Experience
      </h3>
      <div>
        <h1 className="text-xl text-cyan-500">Full Stack Web Developer</h1>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <h2 className="text-lg">Delivery Jobs LLC</h2>
          <h3 className="text-sm">October 2023 to present</h3>
        </div>

        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Led the design, development, and launch of DeliveryJobs.com, a
          specialized job platform for delivery and logistics roles.
        </p>
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Built the application using Next.js, React, and Tailwind, integrating
          Stripe for payments, MongoDB for data storage, and Pusher for
          real-time messaging.
        </p>
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Developed tailored navigation and account workflows for employers and
          job seekers with reusable React components.
        </p>
      </div>
      <div>
        <h1 className="text-xl text-cyan-500">Business Contact</h1>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <h2 className="text-lg">White Sands Delivery Inc.</h2>
          <h3 className="text-sm">April 2021 to October 2023</h3>
        </div>

        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Developed, optimized, and balanced delivery routes to align employee
          strengths and company cost-efficiency objectives and goals.
        </p>
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Monitored and maintained GPS and camera systems on company vehicles to
          ensure operational functionality and compliance.
        </p>
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Enforced policies and procedures in strict adherence to contractual
          requirements with FedEx, ensuring regulatory and service standards
          were met consistently.
        </p>
      </div>
    </div>
  );
};

export default WorkExperience;
