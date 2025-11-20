import React from "react";
import Front from "./frontend/front";
import Backend from "./backend/backend";
import Tool from "./tools/tools";

const Skill = () => {
  return (
    <section
      id="skill"
      className="bg-slate-100  mt-5 px-5 md:px-7 lg:px-14 py-7"
    >
      <h1 className="text-2xl mb-5  border-b-2 border-blue-700 w-14">Skill</h1>

      <div
        className=" flex flex-col gap-5
         md:flex-row w-full justify-between lg:gap-0 "
      >
        <Front />
        <Backend />
        <Tool />
      </div>
    </section>
  );
};

export default Skill;
