import Image, { StaticImageData } from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { FiFramer } from "react-icons/fi";
import zustand from "@/app/images/frontendPics/zustand.svg";
import React from "react";

type Props = {
  image: string | StaticImageData;
  projectName: string;
  projectText: string;
  liveLink: string;
  githubLink: string;
  reactJs?: string;
  TailwindCss?: string;
  typescript?: string;
  NextJS?: string;
  framerMotion?: string;
  zustand?: string;
  gsap?: string;
  style?: string;
  headStyle?: string;
  alt: string;
};

const ProjectProp = ({
  image,
  alt,
  projectName,
  liveLink,
  githubLink,
  projectText,
  reactJs,
  TailwindCss,
  typescript,
  NextJS,
  style,
  gsap,
  framerMotion,
  headStyle,
  zustand,
}: Props) => {
  return (
    <section
      className="md:w-[22rem] bg-slate-100 
    flex flex-col gap-3 p-5 rounded-3xl"
    >
      <Image
        src={image}
        alt={alt}
        className={`${style} rounded-xl md:w-[20rem] h-48`}
      />

      <h1 className={`text-center pt-2 text-xl ${headStyle}`}>{projectName}</h1>
      <p className={`text-center pt-2`}>{projectText}</p>

      <div
        className=" flex flex-row  flex-wrap 
        pt-2 gap-3 justify-center"
      >
        {/* react  */}
        {reactJs && (
          <p
            className="flex flex-row bg-[#58C4DC]
           p-1 gap-1.5 rounded-xl text-sm"
          >
            <FaReact className="h-5" />
            {reactJs}
          </p>
        )}

        {/* next js */}
        {NextJS && (
          <p
            className="flex flex-row bg-black text-white
           p-1 gap-1.5 rounded-xl text-sm"
          >
            <SiNextdotjs className="h-5" />
            {NextJS}
          </p>
        )}

        {/* tailwind css */}
        {TailwindCss && (
          <p
            className="flex flex-row bg-[#00BCFF]
           p-1 gap-1.5 rounded-xl text-sm"
          >
            <RiTailwindCssFill className="h-5" />
            {TailwindCss}
          </p>
        )}

        {/* typescript */}
        {typescript && (
          <p
            className="flex flex-row bg-[#3178C6]
           p-1 gap-1.5 rounded-xl text-sm text-white"
          >
            <TbBrandTypescript className="h-5" />
            {typescript}
          </p>
        )}

        {/* framer motion */}
        {framerMotion && (
          <p
            className="flex flex-row bg-[#F58736]
           p-1 gap-1.5 rounded-xl text-sm"
          >
            <FiFramer className="h-5" />
            {framerMotion}
          </p>
        )}

        {/* zustand */}
        {zustand && (
          <p
            className="flex flex-row bg-[#453F39]
           p-1 gap-1.5 rounded-xl text-sm text-white"
          >
            {zustand}
          </p>
        )}

        {/* gsap */}
        {gsap && (
          <p
            className="flex flex-row bg-[#453F39]
           p-1 gap-1.5 rounded-xl text-sm text-white"
          >
            {gsap}
          </p>
        )}
      </div>

      <div className="flex flex-row  py-2 justify-center gap-5">
        <a
          href={githubLink}
          target="_blank"
          className="flex flex-row gap-1.5 text-blue-700 hover:underline"
        >
          <FaGithub className="h-6" /> Github
        </a>
        <a
          href={liveLink}
          target="_blank"
          className="flex flex-row gap-1.5 text-blue-700 hover:underline"
        >
          <FiExternalLink className="h-6" /> Live
        </a>
      </div>
    </section>
  );
};

export default ProjectProp;
