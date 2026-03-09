import React, { useState } from "react";
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";
import { Skills } from "@/data/SkillData";
import { Social } from "@/data/SocialMedia";
const Sidebar = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const displaySkills = showAllSkills ? Skills : Skills.slice(0, 5);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-5">
        <img
          className="h-20 w-20 rounded-xl"
          src="/assests/originalAvatar.jpeg"
          alt="Rohit.dev"
        />
        <div className="flex flex-col justify-center">
          <h2 className="font-bold">Rohit Singh</h2>
          <h3 className="text-gray-500 font-extralight text-sm">
            Full Stack Developer
          </h3>
        </div>
      </div>
      <p className="text-sm">
        Hi, I'm a passionate full stack developer from Uttarakhand, India,
        specialized in building modern web technologies. Let's create something
        awesome together!
      </p>
      <div className="flex gap-3">
        <Button variant="outline" className={"cursor-pointer"}>
          Hire Me
        </Button>
        <Button className={"cursor-pointer"}>Resume</Button>
      </div>
      {/* demographics */}
      <div className="md:flex flex-col gap-1 hidden">
        {Social.map((val) => (
          <div key={val.link} className="flex items-center gap-1">
            {val.icon}
            <a href={val.link} className="text-gray-500">{val.text}</a>
          </div>
        ))}
      </div>

      <Separator className={'hidden'} />
      {/* top skills */}
      <div className="md:flex flex-col gap-2 hidden">
        <div className="flex items-center justify-between">
          <h2>Top Skills</h2>
          {Skills.length > 5 && (
            <button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="text-sm text-gray-600 hover:text-gray-900 font-medium flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100 transition-all"
            >
              {showAllSkills ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
        <div className="flex gap-2 flex-wrap">
          {displaySkills.map((val, idx) => (
            <div
              key={idx}
              className=" hover:bg-[#62a36f] px-3 py-1 outline w-fit h-fit rounded-3xl bg-[#48ea69]"
            >
              <p className="text-gray-600">{val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
