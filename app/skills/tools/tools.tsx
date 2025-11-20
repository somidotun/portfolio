import figma from "@/app/images/tools/figmaLogo.svg";
import git from "@/app/images/tools/gitIcon.svg";
import github from "@/app/images/tools/github.svg";
import npm from "@/app/images/tools/npm.svg";
import visualStudio from "@/app/images/tools/visualStudio.svg";
import SkillProp from "../skillProp";
import "./tool.css";

const Tool = () => {
  return (
    <section className="border h-80 md:w-72  lg:w-80 bg-white py-5 px-5 ">
      <h1 className="text-2xl text-center pb-4">Tools</h1>

      <div className=" border md:w-60 lg:w-72">
        <div className="parent py-3">
          <SkillProp image={git} text="git" name="git" style="div1" />
          <SkillProp image={figma} text="figma " name="figma " style="div2" />
          <SkillProp
            image={github}
            text="github "
            name="github"
            style="div3 "
          />
          <SkillProp style="div4 " image={npm} text="npm " name="npm" />
          <SkillProp
            image={visualStudio}
            style="div5"
            text="Visual studio "
            name="Visual studio "
          />
        </div>
      </div>
    </section>
  );
};

export default Tool;
