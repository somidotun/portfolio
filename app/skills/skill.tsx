import React from "react";
import Front from "./frontend/front";
import Backend from "./backend/backend";

const Skill = () => {
  return (
    <section id="skill" className="bg-slate-100 px-5 mt-5 md:px-14 py-3">
      <h1 className="text-2xl my-5  border-b-2 border-blue-700 w-14">Skill</h1>

      <div
        className=" flex flex-col gap-5 md:gap-0 
      md:flex-row w-full justify-between"
      >
        <Front />
        <Backend />
        <Front />
      </div>
    </section>
  );
};

export default Skill;
