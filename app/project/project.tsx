import React from "react";
import nike from "@/app/images/project/nikeclone.png";
import agro from "@/app/images/project/agrofresh.png";
import flyEmirate from "@/app/images/project/fryEmirate.png";
import manage from "@/app/images/project/manage.png";
import ProjectProp from "./projectProp";

const Project = () => {
  return (
    <section className=" px-5 md:px-7 lg:px-14 my-2 py-3" id="projects">
      <h1 className="text-2xl my-3  border-b-2 border-blue-700 w-20">
        Projects
      </h1>

      <div
        className="flex flex-row justify-between 
       gap-4 flex-wrap"
      >
        {/* agro fresh */}
        <ProjectProp
          image={agro}
          projectName=" AgroFresh"
          projectText="A farm-fresh marketplace connecting sustainable farms directly to consumers, powered by a dual-payment gateway."
          liveLink="https://agro-fresh-website.vercel.app/"
          githubLink="https://github.com/somidotun/earth-harvest-site"
          alt="picture of agro fresh web app"
          reactJs="React js"
          TailwindCss="Tailwind css"
          typescript="typescript"
          framerMotion="Motion"
          headStyle=" text-green-700"
        />

        {/* nike clone */}
        <ProjectProp
          image={nike}
          projectName=" Nike Clone"
          projectText="Nike-inspired e-commerce demo built with TypeScript, Next.js, and modern animations."
          liveLink="https://nike-clone2-ten.vercel.app/"
          githubLink="https://github.com/somidotun/nike-clone"
          alt="picture of nike web app"
          reactJs="React js"
          NextJS="Nextjs"
          TailwindCss="Tailwind css"
          typescript="typescript"
          framerMotion="Motion"
          zustand="Zustand"
        />

        {/* fly emirate*/}
        <ProjectProp
          image={flyEmirate}
          projectName="Fly Emirate Clone"
          projectText="An Emirates-inspired flight booking platform with responsive design and interactive components."
          liveLink="https://fly-emirate-clone.netlify.app/"
          githubLink="https://github.com/somidotun/fly-emirate-clone"
          alt="picture of fly emirate web app"
          reactJs="React js"
          TailwindCss="Tailwind css"
          typescript="typescript"
          framerMotion="Motion"
          headStyle=" text-[#D8131B]"
        />

        {/* manage */}
        <ProjectProp
          image={manage}
          projectName="Smd manage"
          projectText="Built an animated admin dashboard using React and GSAP"
          liveLink="https://smdmanage.netlify.app/"
          githubLink="https://github.com/somidotun/manage"
          alt="picture of smd manage"
          reactJs="React js"
          TailwindCss="Tailwind css"
          gsap="GSAP"
          headStyle="text-[#F3603C]"
        />
      </div>
    </section>
  );
};

export default Project;
