import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const WorkExperience = () => {
  const workExperience = [
    {
      role: "AV Programmer",
      company: "Power Design Inc",
      dates: "June 2025 to Present",
      bullets: [
        "Built JSX/TSX front-end interfaces for AV control systems, connecting to Crestron SIMPL Windows and C# backends.",
        "Developed custom C# drivers for Crestron Home to support additional hardware and system features.",
        "Integrated music streaming platforms using APIs and webhooks for real-time communication.",
        "Documented interface schemas and integration workflows to support maintainability and clear technical handoff.",
      ],
    },
    {
      role: "Full Stack Web Developer",
      company: "Delivery Jobs LLC",
      dates: "October 2023 to June 2025",
      bullets: [
        "Developed and maintained a responsive Next.js application with JavaScript.",
        "Integrated Stripe for payment processing, MongoDB for data management, Google Geolocation API for distance-based job search, and Pusher for real-time messaging.",
        "Improved SEO and overall performance to increase organic traffic and user engagement.",
        "Led digital marketing efforts using Google Ads to drive employer sign-ups and job seeker acquisition.",
      ],
    },
    {
      role: "Operations Manager",
      company: "White Sands Delivery Inc.",
      dates: "April 2021 to October 2023",
      bullets: [
        "Supervised a team of 40 drivers and coordinated daily logistics alongside three operations managers.",
        "Optimized routing, scheduling, and fleet deployment to maximize delivery efficiency.",
        "Ensured compliance with DOT requirements, safety policies, and legal standards.",
        "Tracked performance metrics and implemented process improvements to enhance reliability and service quality.",
      ],
    },
  ];

  return (
    <div className="space-y-5">
      <h3 className="text-3xl text-cyan-500 flex justify-center md:justify-start">
        Work Experience
      </h3>

      {workExperience.map((job, idx) => (
        <div key={idx}>
          <h1 className="text-xl text-cyan-500">{job.role}</h1>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <h2 className="text-lg">{job.company}</h2>
            <h3 className="text-sm">{job.dates}</h3>
          </div>

          {job.bullets.map((item, i) => (
            <p key={i} className="flex items-start mt-2">
              <span className="mt-1 mx-2 text-lg text-cyan-500">
                <IoMdArrowDropright />
              </span>
              {item}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
