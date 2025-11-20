import Clerk from "@/app/images/backend/clerk2.jpeg";
import firebase from "@/app/images/backend/firebase.png";
import express from "@/app/images/backend/express.jpeg";
import nodejs from "@/app/images/backend/nodejs.svg";
import mongo from "@/app/images/backend/mongo.svg";
import Supabase from "@/app/images/backend/supabase.png";
import SkillProp from "../skillProp";
import "../backend/backend.css";

const Backend = () => {
  return (
    <section className="border h-80 md:w-72  lg:w-80 bg-white py-5 px-5 ">
      <h1 className="text-2xl text-center pb-4">Backend(in view)</h1>

      <div className=" border md:w-60 lg:w-72">
        <div className="parent py-3">
          <SkillProp
            image={firebase}
            text="firebase"
            name="firebase"
            style="div1"
          />
          <SkillProp image={Clerk} text="Clerk " name="Clerk " style="div2" />
          <SkillProp
            image={express}
            text="express "
            name="express"
            style="div3"
          />
          <SkillProp style="div4" image={nodejs} text="nodejs " name="nodejs" />
          <SkillProp image={mongo} style="div5" text="mongo " name="mongo " />
          <SkillProp
            image={Supabase}
            text="Supabase"
            style="div6"
            name="Supabase"
          />
        </div>
      </div>
    </section>
  );
};

export default Backend;
