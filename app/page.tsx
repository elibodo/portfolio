import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import Technologies from "./components/Technologies";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row mx-2 md:px-8 lg:px-28 items-start pt-20 md:pt-0">
      <div className="w-full md:w-4/12 flex flex-col items-center mx-auto md:sticky md:top-24">
        <h1 className="text-2xl w-full self-start md:text-left text-center">
          Hi, my name is
        </h1>
        <span className="absolute w-full mt-[52px] bg-cyan-700 mx-2 blur-lg bg-clip-text text-5xl md:text-6xl text-transparent select-none md:text-left text-center">
          Eli Bodovinitz
        </span>
        <h2 className="text-5xl md:text-6xl w-full mt-5 text-cyan-500 md:text-left text-center">
          Eli Bodovinitz
        </h2>
        <p className="mt-5 justify-center md:self-start">
          I&apos;m a full stack developer.
        </p>
        <p className="mt-5 justify-center md:self-start text-cyan-500">
          Wimauma, Florida
        </p>
        <p className="justify-center md:self-start text-cyan-500">
          ebodovinitz@gmail.com
        </p>
        <div className="flex flex-row my-5 gap-5 text-3xl justify-center md:self-start">
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
            href={"EliBodovinitzResume.pdf"}
            className="text-white hover:text-cyan-500 hover:scale-125 transition duration-200 ease-in-out"
          >
            <BiLinkExternal />
          </a>
        </div>
        {/* <p className="text-sm md:text-left text-center">
          I&apos;m a full stack developer with professional experience in
          JavaScript, React.js, Next.js, SQL, MongoDB, Tailwind CSS, HTML, and
          CSS. I also have non-professional experience using C#, Visual Basic,
          Python, and Java.
        </p> */}
        <p className="text-sm md:text-left text-center">
          Im a full stack developer with experience in JavaScript, React.js,
          Next.js, SQL, MongoDB, and Tailwind CSS. I also know Node.js, C#, .Net
          Core, and many other technologies.
        </p>
      </div>
      <div className="w-full md:w-6/12 px-1">
        <section id="technologies" className="py-10 lg:pb-10 md:pt-24">
          <Technologies />
        </section>
        <section id="workexperience" className="pb-10 lg:pb-10 lg:pt-24">
          <WorkExperience />
        </section>
        <section id="projects" className="pb-10 lg:pb-10 lg:pt-24">
          <Projects />
        </section>
        <section id="education" className="pb-10 lg:pb-24 lg:pt-24">
          <Education />
        </section>
      </div>
    </section>
  );
}
