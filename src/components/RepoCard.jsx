import React from "react";
import { SquareChartGantt } from "lucide-react";
import { FolderGit } from "lucide-react";

const RepoCard = ({
  title = "nova desgins ltd",
  desc = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic sed praesentium ipsa fugiat ad consectetur non natus eaque, perspiciatis repellat.",
  skills = [
    {
      name: "figma",
      color: "blue",
    },
    {
      name: "JavaScript",
      color: "purple",
    },
  ],
  liveLink,
  githubLink
}) => {
  return (
    <div className="py-3 px-2 shadow dark:shadow-gray-800 rounded-xl flex flex-col gap-2 cursor-pointer">
      <div className="flex  items-center justify-between">
        <div className="flex gap-1 items-center">
          <FolderGit size={15} />
          <h4>{title.length>30?title.slice(0,30):title}{title.length>30&&'...'}</h4>
        </div>
        <div className="flex gap-2 flex-wrap">
          <div className=" cursor-pointer hover:bg-amber-400 px-5 outline w-fit h-fit text-sm md:text-[17px] rounded-3xl border border-[#48ea69]">
            <a href={liveLink?liveLink:githubLink} target="_blank" className="text-gray-600">{liveLink?'Live':'Code'}</a>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-500">{desc.length>100?desc.slice(0,100):desc}{desc.length>100&&'...'}</p>
      <div className="flex gap-2 flex-wrap">
        {skills.map(({ name, color }) => (
          
          <div className="flex gap-1 items-center " key={name}>
            <div
              className={`w-3 h-3 rounded-full border border-slate-200 shadow-sm ${
                color === "blue"
                  ? "bg-blue-500"
                  : color === "orange"
                    ? "bg-orange-500"
                    : color === "green"
                      ? "bg-emerald-500"
                      :color==="red"
                      ? "bg-red-500"
                      : "bg-slate-400"
              }`}
            ></div>
            <p className="text-xs text-gray-500">{name}</p>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default RepoCard;
