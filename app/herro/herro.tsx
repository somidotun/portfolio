"use client";

import Image from "next/image";
import "./glassEffect.css";

import herro from "@/app/images/herro.jpg";
import { useTypewriter } from "react-simple-typewriter";
import Button from "../props/button";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Herro = () => {
  // typewriter effect
  const [typewriter] = useTypewriter({
    words: [
      "Frontend  Developer.",
      "Backend  Developer(in view).",
      "Fullstack  Developer(in view).",
      "video editor.",
      "industrial and production engineer by studies.",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="flex flex-col w-full gap-5 p-5 md:justify-between md:flex-row md:px-14 bg-slate-100">
      {/* text */}
      <div
        className="flex flex-col  gap-5 pt-5
       font-serif md:pt-10 "
      >
        {/* text */}
        <div className="flex flex-col gap-4">
          <p className="text-xl"> Hello, my name is </p>
          <h1 className="text-4xl md:w-96">
            Oluwasomidotun John{" "}
            <span className="text-blue-700">Ayo-oluwole</span>
          </h1>
          <p>
            I am a <span className="text-blue-700 ">{typewriter}</span>
          </p>
        </div>

        {/* buttons */}
        <div
          className="flex flex-col 
           justify-between pr-2
          gap-2 md:justify-normal"
        >
          {/* <Button
            text="Get in touch"
            style="hover:border-slate-100 hover:bg-blue-700 hover:text-white"
          /> */}

          <a
            href="/Ayo-oluwole-Oluwasomidotun-john.pdf"
            download="Ayo-oluwole-Oluwasomidotun-john-software CV"
            rel="noopener noreferrer"
            title="download"
          >
            <Button
              text=" Download cv as a software engineer"
              style="hover:border-slate-100 w-full hover:bg-blue-700 hover:text-white"
            />
          </a>

          <a
            href="/Ayo-Oluwole-Oluwasomidotun-John-industrial.pdf"
            download="Ayo-oluwole-Oluwasomidotun-john-industrial CV"
            rel="noopener noreferrer"
            title="download"
          >
            <Button
              text="Download cv as a industrial engineer"
              style="hover:border-slate-100 w-full hover:bg-blue-700 hover:text-white"
            />
          </a>
        </div>

        {/* social icons */}
        <div className="flex flex-row gap-4">
          {/* linkedin */}
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-xl"
            title="linkedin"
            href="https://www.linkedin.com/in/ayo-oluwole-oluwasomidotun-51a94522a/"
          >
            <FaLinkedin />
          </a>

          {/* Github */}
          <a
            href="https://github.com/somidotun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl"
            title="linkedin"
          >
            <FaGithub />
          </a>

          {/* instagram */}
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-xl"
            title="instagram"
            href="https://www.instagram.com/somidotun07/"
          >
            <FaInstagram />
          </a>

          {/* whatsapp */}
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-xl"
            title="whatsapp"
            href="https://wa.me/qr/PAH5XQKI5CDSN1 "
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* image */}
      <div className="w-full pl-5 md:pl-0 md:w-[25rem] h-[20rem] ">
        <Image
          className="rounded-xl w-96 "
          src={herro}
          alt="picture of someone laptop view"
        />
      </div>
    </div>
  );
};

export default Herro;
