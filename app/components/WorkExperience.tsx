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
          <h3 className="text-sm">October 2023 to March 2025</h3>
        </div>

        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Built and maintained a responsive Next.js and JavaScript web
          application.
        </p>
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Integrated Stripe for secure payment processing, MongoDB for data
          storage, Google Geolocation API for distance-based searching, and
          Pusher for real-time messaging.
        </p>
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Implemented SEO strategies and optimized site performance to increase
          traffic.
        </p>
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Created digital marketing campaigns (Google Ads) to drive sign-ups.
        </p>
      </div>
      <div>
        <h1 className="text-xl text-cyan-500">Operations Manager</h1>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <h2 className="text-lg">White Sands Delivery Inc.</h2>
          <h3 className="text-sm">April 2021 to October 2023</h3>
        </div>

        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Managed a team of 40 drivers, collaborating with three other managers
          to oversee daily operations.
        </p>
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Managed driver scheduling, route optimization, and fleet coordination.
        </p>
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Ensured compliance with DOT regulations, safety standards, and company
          policies.
        </p>
        <p className="flex items-start mt-2">
          <span className="mt-1 mx-2 text-lg text-cyan-500">
            <IoMdArrowDropright />
          </span>
          Monitored key performance metrics and optimized workflows to improve
          service quality.
        </p>
      </div>
    </div>
  );
};

export default WorkExperience;
