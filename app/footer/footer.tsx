import Image from "next/image";
import logo from "@/app/favicon.ico";
import React from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const date = new Date();

  return (
    <section
      className=" bg-slate-100 flex flex-col
      items-center gap-3 p-8"
      id="contact"
    >
      {/* logo */}
      <div className="flex flex-row gap-2">
        <Image src={logo} alt="logo" className="w-14 h-14 rounded-full" />
        <p className="text-xl h-8 md:text-blue-700 hover:underline pt-3">
          <Link href={"/"}>
            Somidotun<span>.dev</span>
          </Link>
        </p>
      </div>
      {/* contact */}
      <div>
        {/* get in touch */}
        <p className="text-center">Get in touch with me </p>
        {/* social icons */}
        <div className="flex flex-row gap-4 pt-3">
          {/* linkedin */}
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-xl bg-white p-2 rounded-xl group"
            title="linkedin"
            href="https://www.linkedin.com/in/ayo-oluwole-oluwasomidotun-51a94522a/"
          >
            <FaLinkedin className="group-hover:text-blue-700" />
          </a>

          {/* Github */}
          <a
            href="https://github.com/somidotun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl bg-white p-2 rounded-xl group"
            title="linkedin"
          >
            <FaGithub className="group-hover:text-blue-700" />
          </a>

          {/* instagram */}
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-xl bg-white p-2 rounded-xl group"
            title="instagram"
            href="https://www.instagram.com/somidotun07/"
          >
            <FaInstagram className="group-hover:text-blue-700" />
          </a>

          {/* whatsapp */}
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-xl bg-white p-2 rounded-xl group"
            title="whatsapp"
            href="https://wa.me/qr/PAH5XQKI5CDSN1 "
          >
            <FaWhatsapp className="group-hover:text-blue-700" />
          </a>
        </div>
      </div>

      {/* developed */}
      <p className="flex flex-row gap-1 text-center">
        developed by somidotun.dev| {date.getFullYear()} All right reserved
      </p>
    </section>
  );
};

export default Footer;
