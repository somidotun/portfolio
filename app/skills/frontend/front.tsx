"use client";

import React, { useState } from "react";
import css from "@/app/images/frontendPics/css.svg";
import html from "@/app/images/frontendPics/html.svg";
import javascript from "@/app/images/frontendPics/javascript.svg";
import reactHookForm from "@/app/images/frontendPics/reactHookForm.svg";
import Framer from "@/app/images/frontendPics/Framer.svg";
import Tailwindcss from "@/app/images/frontendPics/Tailwindcss.svg";
import Next from "@/app/images/frontendPics/Next.svg";
import reactjs from "@/app/images/frontendPics/reactjs .png";
import typescript from "@/app/images/frontendPics/typescript.svg";
import Vite from "@/app/images/frontendPics/Vite.svg";
import Zod from "@/app/images/frontendPics/Zod.svg";
import zustand from "@/app/images/frontendPics/zustand.svg";
import SkillProp from "../skillProp";
import "../frontend/skill.css";

// type Props = {};

const Front = () => {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <div className=" bg-white  border py-5 scroll-mt-14">
        <h1 className="text-2xl text-center pb-4">Frontend </h1>

        <div className=" px-4 gap-5 md:w-80">
          <div className="parent border  md:w-72 py-3">
            <SkillProp image={html} text="html" name="html" style="div1" />
            <SkillProp image={css} text="css " name="css " style="div2" />
            <SkillProp
              image={javascript}
              text="javascript "
              name="javascript"
              style="div3"
            />
            <SkillProp
              style="div4"
              image={reactHookForm}
              text="reactHookForm "
              name="React-Hook-Form "
            />
          </div>

          <p
            className="hover:cursor-pointer text-center py-5
           hover:text-blue-700"
            onClick={() => setOpen((prev) => !prev)}
          >
            show {open ? " less" : " more"}
          </p>

          {open && (
            <div className="parent2 border px-4 md:w-72 gap-5 py-3">
              <SkillProp
                image={Framer}
                style="div5"
                text="motion "
                name="motion "
              />
              <SkillProp
                image={Tailwindcss}
                text="Tailwindcss"
                style="div6"
                name="Tailwind Css"
              />

              <SkillProp
                style="div7"
                image={Next}
                text="Next "
                name="Next.js"
              />
              <SkillProp
                style="div8"
                image={reactjs}
                text="reactjs "
                name="React.js"
              />
              <SkillProp
                style="div9"
                image={typescript}
                text="typescript "
                name="typescript"
              />
              <SkillProp image={Vite} style="div10" text="Vite " name="Vite" />
              <SkillProp image={Zod} text="Zod " style="div11" name="Zod" />
              <SkillProp
                image={zustand}
                text="zustand "
                style="div12"
                name="zustand"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Front;
